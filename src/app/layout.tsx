import { Inter } from "next/font/google";
import "@/assets/css/globals.css";
import FullScreenToggle from "@/components/default/FullScreenToggle/FullScreenToggle";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="favicon.ico" />
      </head>
      <body className={`custom-scrollbar ${inter.className}`}>
        <FullScreenToggle />
        {children}
      </body>
    </html>
  );
};