import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/css/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // title: "Create Next App",
  // description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        style={{
          // overflow: "hidden",
          // '&::-webkit-scrollbar': {
          //   width: '2px',
          // },
          // '&::-webkit-scrollbar-track': {
          //   background: '#f1f1f1',
          // },
          // '&::-webkit-scrollbar-thumb': {
          //   background: '#888',
          //   borderRadius: '2px',
          // },
          // '&::-webkit-scrollbar-thumb:hover': {
          //   background: '#555',
          // },

        }}
        className={
          inter.className
        }


      >{children}</body>
    </html>
  );
}
