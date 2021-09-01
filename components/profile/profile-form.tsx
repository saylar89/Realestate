import { FormEvent, useRef } from "react";
import classes from "./profile-form.module.css";
import validator from "validator";
import NotificationContext from "store/notification-context";
import { useContext } from "react";

type PassType = {
  passwordNew: string;
  passwordOld: string;
};

type PropType = {
  onChangePassword: (a: { oldPassword: string; newPassword: string }) => void;
};

function ProfileForm(props: PropType) {
  const oldPasswordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);

  const notificationCtx = useContext(NotificationContext);

  function submitHandler(event: FormEvent) {
    event.preventDefault();

    notificationCtx.showNotification({
      title: "Please wait",
      message: "Loading...",
      status: "pending",
    });

    const errorEls: HTMLCollectionOf<Element> =
      document.getElementsByClassName("error");
    for (var i = 0; i < errorEls.length; i++) errorEls[i].innerHTML = "";

    const enteredOldPassword = oldPasswordRef.current!.value;
    const enteredNewPassword = newPasswordRef.current!.value;

    const user: PassType = {
      passwordNew: enteredNewPassword,
      passwordOld: enteredOldPassword,
    };

    if (
      validator.isEmpty(user.passwordNew) &&
      validator.isEmpty(user.passwordOld)
    ) {
      document.getElementById("checkPass1")!.innerHTML =
        "Please fill in password";
      document.getElementById("checkPass2")!.innerHTML =
        "Please fill in password";
    } else if (validator.isEmpty(user.passwordOld)) {
      document.getElementById("checkPass1")!.innerHTML =
        "Please fill in password";
    } else if (validator.isEmpty(user.passwordNew)) {
      document.getElementById("checkPass2")!.innerHTML =
        "Please fill in password";
    } else if (!validator.isStrongPassword(user.passwordOld)) {
      document.getElementById("checkPass1")!.innerHTML =
        "Your password must contain one uppercase,lowercase,number,symbol and at least 8 character";
    } else if (!validator.isStrongPassword(user.passwordOld)) {
      document.getElementById("checkPass2")!.innerHTML =
        "Your password must contain one uppercase,lowercase,number,symbol and at least 8 character";
    } else {
      props.onChangePassword({
        oldPassword: enteredOldPassword,
        newPassword: enteredNewPassword,
      });
    }

    // optional: Add validation
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordRef} />
        <p id="checkPass1" className="error"></p>
      </div>
      <div className={classes.control}>
        <label htmlFor="old-password">Old Password</label>
        <input type="password" id="old-password" ref={oldPasswordRef} />
        <p id="checkPass2" className="error"></p>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
