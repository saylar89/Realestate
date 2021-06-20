import React from "react";
import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

const name = "[Your Name]";
export const siteTitle = "Next.js Sample Website";

interface LayoutProps {
  pageTitle: string;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
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
