import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "MeatingOS — Decision Acceleration Platform for Protein",
  description:
    "The world's first Decision Acceleration Platform for Protein. No bot at your table. No recording your chewing.",
  openGraph: {
    title: "MeatingOS",
    siteName: "MeatingOS",
    description:
      "AI that turns what gets grilled into what gets fulfilled.",
    type: "website",
    images: [
      {
        url: "https://meatingos.com/og-image.png",
        width: 1792,
        height: 1024,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MeatingOS",
    description:
      "The world's first Decision Acceleration Platform for Protein.",
    images: ["https://meatingos.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
