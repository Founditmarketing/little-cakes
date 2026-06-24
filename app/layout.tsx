import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MobileOrderBar } from "@/components/MobileOrderBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.littlecakeswithbigattitude.com"),
  title: {
    default: "Little Cakes With Big Attitude | Cupcakes, Cakes & Coffee in Central Louisiana",
    template: "%s | Little Cakes With Big Attitude",
  },
  description:
    "Small cakes, loud flavor. Scratch-made cupcakes, cakes, cookies and coffee in Alexandria and Pineville, Louisiana. Order ahead, cater an event, or just come get something sweet.",
  openGraph: {
    title: "Little Cakes With Big Attitude",
    description: "Small cakes, loud flavor. Alexandria & Pineville, Louisiana.",
    type: "website",
    locale: "en_US",
    images: ["/photos/cupcakes-array.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Cakes With Big Attitude",
    description: "Small cakes, loud flavor. Alexandria & Pineville, Louisiana.",
    images: ["/photos/cupcakes-array.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f0e10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable}`}
    >
      <body className="min-h-[100dvh] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-teal focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-teal-ink"
        >
          Skip to content
        </a>
        <div className="film-grain" aria-hidden="true" />
        <Nav />
        <div id="main-content">{children}</div>
        <Footer />
        {/* Reserve space so the fixed mobile order bar never covers the footer */}
        <div aria-hidden="true" className="h-[88px] lg:hidden" />
        <MobileOrderBar />
      </body>
    </html>
  );
}
