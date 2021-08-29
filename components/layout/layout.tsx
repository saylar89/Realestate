import React, { PropsWithChildren, useContext } from "react";
import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import Notification from "../../components/ui/notification";
import NotificationContext from "store/notification-context";

const name = "[Your Name]";
export const siteTitle = "Next.js Sample Website";

interface LayoutProps extends PropsWithChildren<{}> {
  pageTitle: string;
  description?: string;
  content?: string;
}

const Layout = (props: LayoutProps): JSX.Element => {
  const { pageTitle, description, content, children } = props;
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

  return (
    <div>
      <Head>
        <title>KarmanaGroup | {pageTitle}</title>
        <meta name={description} content={content} />
      </Head>
      <Header />
      <div className="middle">{children}</div>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
