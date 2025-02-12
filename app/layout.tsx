import "./globals.css";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";
import { PageNav } from "@/components/nav";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "@/components/external-link";
import { Metadata } from "next";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adam Spera • dev",
  description: "Networking, Applications, Programming",
  authors: {
    name: "Adam Spera",
    url: "https://adamspera.dev",
  },
  viewport: "width=device-width, initial-scale=1",
  metadataBase: new URL("https://adamspera.dev"),
  openGraph: {
    type: "website",
    url: "https://adamspera.dev",
    title: "Adam Spera • dev",
    description: "Networking, Applications, Programming",
    siteName: "AdamSpera.dev",
    images: [
      {
        url: "https://adamspera.dev/facebook.png",
        width: 1200,
        height: 1200,
      },
    ],
  }
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased min-h-screen bg-white text-stone-900 dark:text-stone-50 dark:bg-stone-950 ${outfit.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-6 md:py-10 px-4">
            <PageNav />
            <main>{children}</main>
            <footer className="mx-auto mt-12 mb-4 flex items-center justify-center text-xs">
              <div>
                &copy; 2015-{new Date().getFullYear()} &middot;{" "}
                <ExternalLink href="https://github.com/AdamSpera/adamspera.dev/blob/main/LICENSE">
                  BSD 3-Clause license
                </ExternalLink>{" "}
              </div>

              <div className="pl-2">
                <ModeToggle />
              </div>
            </footer>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
