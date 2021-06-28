import "styles/globals.css";
import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";


function App({ Component, pageProps }: AppProps) {
  useState;
  return <Component {...pageProps} />;
}

export default App;
