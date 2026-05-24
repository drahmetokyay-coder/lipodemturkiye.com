import type { Metadata } from "next";
import "./globals.css";

// Font loaded via CSS fallback to avoid build-time Google Fonts fetch issues
// When deploying to Vercel, switch back to next/font/google for optimal loading

export const metadata: Metadata = {
  title: {
    default: "Lipödem Türkiye | Bilimsel Bilgi, Araçlar ve Topluluk Desteği",
    template: "%s | Lipödem Türkiye",
  },
  description:
    "Türkiye'nin ilk kapsamlı lipödem hasta platformu. Semptom testi, tedavi rehberleri, uzman klinik bulucu ve topluluk desteği.",
  metadataBase: new URL("https://lipodemturkiye.com"),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Lipödem Türkiye",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-stone-50 text-stone-700">
        {children}
      </body>
    </html>
  );
}
