const puppeteer = require('puppeteer');
const path = require('path');

async function generateExecutivePDF() {
  console.log('Starting executive CV PDF generation...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Set viewport for consistent rendering
    await page.setViewport({
      width: 1200,
      height: 1600,
      deviceScaleFactor: 2
    });
    
    console.log('Navigating to executive CV page...');
    await page.goto('http://localhost:3003/cv', {
      waitUntil: 'load',
      timeout: 30000
    });
    
    // Wait for any dynamic content to load
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Generating executive PDF...');
    const pdfPath = path.join(__dirname, 'public', 'Paulo_Neves_CV.pdf');
    
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      margin: {
        top: '12mm',
        bottom: '12mm',
        left: '12mm',
        right: '12mm'
      }
    });
    
    console.log(`Executive CV PDF generated successfully: ${pdfPath}`);
    
  } catch (error) {
    console.error('Error generating executive PDF:', error);
  } finally {
    await browser.close();
  }
}

generateExecutivePDF();