import { Big_Shoulders_Display, Work_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://hamza-khalid-portfolio.vercel.app"),
  title: "Hamza Khalid — Full Stack Web Developer & Sales Professional",
  description:
    "Portfolio of Hamza Khalid — full stack web developer & sales professional, co-founder of Naxotop PVT LTD and NayaBazar.pk, builder of MorEazy POS.",
  openGraph: {
    type: "website",
    title: "Hamza Khalid — Full Stack Web Developer & Sales Professional",
    description:
      "Full stack developer & sales professional — 50+ web projects, 30,000+ app downloads, and independently built products like MorEazy POS.",
    url: "https://hamza-khalid-portfolio.vercel.app/",
    siteName: "Hamza Khalid — Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hamza Khalid — Full Stack Web Developer & Sales Professional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamza Khalid — Full Stack Web Developer & Sales Professional",
    description:
      "Full stack developer & sales professional — 50+ web projects, 30,000+ app downloads, and independently built products like MorEazy POS.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
