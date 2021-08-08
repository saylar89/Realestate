import "styles/globals.css";
import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import Head from "next/head";
import { Fragment } from "react";

function App({ Component, pageProps }: AppProps) {
  useState;
  return (
    <Fragment>
      <Head>
        <title>Karmana</title>
        <meta
          name="description"
          content="online realestate for buy and sell house"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default App;
