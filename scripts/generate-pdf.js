/**
 * Regenerates public/Paulo_Neves_CV.pdf from the live /cv page.
 *
 * Requires a running dev or production server:
 *   npm run dev            # terminal 1
 *   npm run generate:pdf   # terminal 2
 *
 * Override the target with CV_URL, e.g.
 *   CV_URL=http://localhost:3001/cv npm run generate:pdf
 */
const puppeteer = require("puppeteer");
const path = require("path");

const CV_URL = process.env.CV_URL || "http://localhost:3000/cv";
const OUTPUT = path.join(__dirname, "..", "public", "Paulo_Neves_CV.pdf");
/** A4 printable box at 96dpi with the 12mm @page margin declared in app/cv/page.tsx. */
const PRINTABLE_WIDTH_PX = 703;
const PRINTABLE_HEIGHT_PX = 1032;

async function generatePDF() {
  console.log(`Generating CV PDF from ${CV_URL}`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });

    // Running `npm run build` while `next dev` is up wipes .next underneath the
    // dev server, which then 404s its own CSS chunks. The page still returns
    // 200 and still measures plausibly, so an unstyled PDF ships silently
    // unless we watch for the failed asset explicitly.
    const brokenAssets = [];
    page.on("response", (res) => {
      if (res.status() >= 400 && /\.(css|js|woff2?)/.test(res.url())) brokenAssets.push(`${res.status()} ${res.url()}`);
    });

    const response = await page.goto(CV_URL, { waitUntil: "networkidle0", timeout: 45000 });
    if (!response || !response.ok()) {
      throw new Error(`${CV_URL} returned ${response ? response.status() : "no response"}`);
    }
    if (brokenAssets.length > 0) {
      throw new Error(
        `The page loaded but ${brokenAssets.length} asset(s) 404'd, so it is unstyled:\n  ${brokenAssets
          .slice(0, 4)
          .join("\n  ")}\nRestart the dev server (it was probably clobbered by a concurrent build).`
      );
    }

    const bodyFont = await page.evaluate(() => getComputedStyle(document.body).fontFamily);
    if (/^(Times|serif)/i.test(bodyFont)) {
      throw new Error(`Body font resolved to "${bodyFont}" — the stylesheet did not load. Restart the dev server.`);
    }

    // Webfonts change line-heights, which changes how much content fits.
    await page.evaluateHandle("document.fonts.ready");

    // Measure in print media at the real printable width: the screen-only
    // min-height and max-width would otherwise report the wrong box.
    await page.emulateMediaType("print");
    await page.setViewport({ width: PRINTABLE_WIDTH_PX, height: PRINTABLE_HEIGHT_PX });
    await page.evaluateHandle("document.fonts.ready");

    // Fail loudly on overflow rather than shipping a silently clipped PDF.
    const pages = await page.evaluate((printable) => {
      return [...document.querySelectorAll(".cv-page")].map((el, index) => ({
        page: index + 1,
        height: Math.round(el.getBoundingClientRect().height),
        headroom: Math.round(printable - el.getBoundingClientRect().height),
      }));
    }, PRINTABLE_HEIGHT_PX);

    pages.forEach((p) => console.log(`  page ${p.page}: ${p.height}px (${p.headroom}px headroom)`));

    const overflowing = pages.filter((p) => p.headroom < 0);
    if (overflowing.length > 0) {
      throw new Error(
        `Content overflows the A4 printable box on page(s) ${overflowing
          .map((p) => p.page)
          .join(", ")}. Trim content in lib/data/profile.ts before regenerating.`
      );
    }

    // preferCSSPageSize honors the @page rule in app/cv/page.tsx. Declaring a
    // puppeteer margin here as well would give two competing page boxes.
    await page.pdf({
      path: OUTPUT,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
    });

    console.log(`Wrote ${OUTPUT}`);
  } catch (error) {
    console.error(`Failed to generate CV PDF: ${error.message}`);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
}

generatePDF();
