import Head from "next/head";
import * as React from "react";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>ZING APP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </main>
    </>
  );
}