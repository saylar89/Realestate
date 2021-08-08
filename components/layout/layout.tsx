import React, { PropsWithChildren } from "react";
import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

const name = "[Your Name]";
export const siteTitle = "Next.js Sample Website";

interface LayoutProps extends PropsWithChildren<{}> {
  pageTitle: string;
  description?: string;
  content?: string;
}

const Layout = (props: LayoutProps): JSX.Element => {
  const { pageTitle, description, content, children } = props;
  return (
    <div>
      <Head>
        <title>KarmanaGroup | {pageTitle}</title>
        <meta name={description} content={content} />
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
