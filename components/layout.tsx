import React, { PropsWithChildren } from "react";
import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

const name = "[Your Name]";
export const siteTitle = "Next.js Sample Website";

interface LayoutProps extends PropsWithChildren<{}> {
  pageTitle: string;
}

const Layout = (props: LayoutProps): JSX.Element => {
  const { pageTitle, children } = props;
  return (
    <div>
      <Head>
        <title>KarmanaGroup | {pageTitle}</title>
      </Head>
      <Header />
      <div className="middle">{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
