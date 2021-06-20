import "styles/globals.css";
import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import Layout from "components/layout";

function App({ Component, pageProps }: AppProps) {
  useState;
  return (
    <Layout pageTitle="">
      <Component {...pageProps} />;
    </Layout>
  );
}

export default App;
