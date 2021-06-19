import "../styles/globals.css";
import { AppProps } from "next/app";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout pageTitle="Karmana">
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
