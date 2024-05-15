import { Inter } from "next/font/google";
import "@/assets/css/globals.css";

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
      </head>
      <body className={`custom-scrollbar ${inter.className}`}>
        {children}
      </body>
    </html>
  );
};