// import { getSession } from "next-auth/client";
// import { useEffect } from "react";
import { useState } from "react";
import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";
import NotificationContext from "store/notification-context";
import { useContext } from "react";
import { useRouter } from "next/router";

type PropType = {
  oldPassword: string;
  newPassword: string;
};

function UserProfile() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   getSession().then((session) => {
  //     if (!session) {
  //       window.location.href = "/";
  //     } else {
  //       setIsLoading(false);
  //     }
  //   });
  // }, []);

  // if (isLoading) {
  //   return <p className={classes.profile}>Loading...</p>;
  // }
  const notificationCtx = useContext(NotificationContext);
  const router = useRouter();

  async function changePasswordHandler(passwordData: PropType) {
    const response = await fetch("/api/user/change-password", {
      method: "PATCH",
      body: JSON.stringify(passwordData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      notificationCtx.showNotification({
        title: "Error!",
        message: data.message || "Something went wrong",
        status: "error",
      });
    } else {
      notificationCtx.showNotification({
        title: "Success!",
        message: data.message || "You registered successfully.",
        status: "success",
      });
      router.push("/");
    }

    console.log(data);
  }

  return (
    <section className={classes.profile}>
      <h1>User Profile</h1>
      <ProfileForm onChangePassword={changePasswordHandler} />
    </section>
  );
}

export default UserProfile;
