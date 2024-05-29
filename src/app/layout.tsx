import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import NextTopLoader from 'nextjs-toploader';

const epilogue = Epilogue({ subsets: ["latin"], weight: ["400", "500", "600", "700",] });

export const metadata: Metadata = {
  title: "Virtue",
  description: "UI for crowdfunding page",
  icons: {
    icon: '/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={epilogue.className}>
        <NextTopLoader />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
