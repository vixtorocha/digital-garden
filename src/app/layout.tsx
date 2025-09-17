import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import Layout from "@/components/layout";
import Header from "@/components/header";
import localFont from "next/font/local";

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "João Victor Rocha",
  description:
    "Engenheiro de Software | Desenvolvedor Full-Stack | Apaixonado por Tecnologia e Inovação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={poppins.className}>
      <body>
        <div>
          <Head>
            <meta charSet="utf-8" />
            <link
              href="/fonts/stylesheet.css"
              rel="stylesheet preload"
              as="style"
            />
            <link rel="shortcut icon" type="image/png" href="/favicon.png" />
          </Head>
          <Layout>
            <Header />
            {children}
          </Layout>
        </div>
      </body>
    </html>
  );
}
