import type { Metadata } from "next";
import { Press_Start_2P, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import QueryProvider from "./providers/QueryProvider";
import { Toaster } from "sonner";

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apocalypse UI",
  description: "Next Gen Web3 UI Library",
  openGraph: {
    title: "Apocalypse UI",
    description: "Next Gen Web3 UI Library",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Apocalypse UI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apocalypse UI",
    description: "Next Gen Web3 UI Library",
    images: ["/images/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pressStart2P.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <Navbar />
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 3000,

              unstyled: true,
              classNames: {
                toast:
                  "bg-black/8 text-white border border-white/12 rounded-[6px] backdrop-blur-sm px-4 py-3 font-mono text-sm w-auto flex items-center gap-3 text-center md:mb-10 mb-8 mr-5",

                title: "font-semibold uppercase",
                description: "text-white/80 text-xs",
              },
            }}
          />
        </QueryProvider>
      </body>
    </html>
  );
}
