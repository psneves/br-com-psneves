import type { Metadata } from "next";

/**
 * `/cv` is a client component and cannot export metadata itself, so this layout
 * sets it. It is not cosmetic: Puppeteer writes the document <title> into the
 * generated PDF's /Title field, and public/Paulo_Neves_CV.pdf is a file people
 * download and keep. Without this the PDF inherits the homepage title, which is
 * how it ended up stamped with a stale positioning once already.
 */
export const metadata: Metadata = {
  title: "Paulo Neves — CV",
};

export default function CvLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
