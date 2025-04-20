import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { RSI_menu } from "@/components/rsi/menu";
import { Footer } from "@/components/rsi/footer";
import GoogleMapsProvider from "@/components/rsi/GoogleMapsProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RSI",
  description: "Your Healthy Living Expert",
  icons: {
    icon: "/img/logo-s.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GoogleMapsProvider>
            <div id="home">
              <RSI_menu />
            </div>
            {children}
            <Footer />
          </GoogleMapsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
