import { createContext, PropsWithChildren, useState, useEffect } from "react";

type Notification = {
  title: string;
  message: string;
  status: string;
};

type ThemeContextType = {
  notification: { title: string; message: string; status: string } | null;
  showNotification: (notificationData: Notification) => void;
  hideNotification: () => void;
};

const NotificationContext = createContext<ThemeContextType>({
  notification: null, // {title,message,status}
  showNotification: function (notificationData) {},
  hideNotification: function () {},
});

export const NotificationContextProvider = (
  props: PropsWithChildren<{}>
): JSX.Element => {
  const { children } = props;
  const [activeNotification, setActiveNotification] =
    useState<Notification | null>(null);

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === "success" ||
        activeNotification.status === "error")
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  const showNotificationHandler = (notificationData: Notification | null) => {
    setActiveNotification(notificationData);
  };

  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
