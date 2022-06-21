import Head from "next/head";
import * as React from "react";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Script from "next/script";

const theme = createTheme();
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Food Store</title>
        <meta name="description" content="Generated by Zing App" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Food Store" />
        <meta property="og:description" content="Food Store - Zing App" />
        <meta
          property="og:image"
          content="https://food-store-next-js.vercel.app/favicon.ico"
        />
        <meta
          property="og:url"
          content="https://food-store-next-js.vercel.app/"
        />
      </Head>
      <main>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </main>

      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      
      ga('create', 'UA-XXXX-Y', 'auto');
      ga('send', 'pageview');
  `,
        }}
      />
    </>
  );
}
