import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import Layout from "../components/layout";
import Header from "../components/header";
// import "styles/fonts/stylesheet.css";

function MyApp({ Component, pageProps }) {
  return (
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
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
