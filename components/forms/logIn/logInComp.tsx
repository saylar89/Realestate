import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import FormikControl from "../generalFormik/formikControl";
import NotificationContext from "store/notification-context";
import { signIn } from "next-auth/client";
import { useContext } from "react";
import { useRouter } from "next/router";

interface UserSignup {
  email: string;
  password: string;
}

const LogInComp = () => {
  const notificationCtx = useContext(NotificationContext);
  const router = useRouter();

  const initialValues: UserSignup = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (data: UserSignup, onSubmitProps) => {
          const { email, password } = data;
          const errorEls: HTMLCollectionOf<Element> =
            document.getElementsByClassName("error");
          for (var error = 0; error < errorEls.length; error++)
            errorEls[error].innerHTML = "";

          notificationCtx.showNotification({
            title: "Please wait",
            message: " logging in...",
            status: "pending",
          });

          const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
          });

          console.log("result", result);

          if (result!.error) {
            notificationCtx.showNotification({
              title: "Error!",
              message: result!.error || "User not found!",
              status: "error",
            });
          } else {
            notificationCtx.showNotification({
              title: "Success!",
              message: "You are loged in",
              status: "success",
            });
            router.replace("/personalProfile");
            onSubmitProps.resetForm();
          }
        }}
        validateOnChange={false}
      >
        <Form>
          <div className="container ">
            <div className="row">
              <div className="col"></div>
              <div className="col-6 border rounded border-secondary mt-4 p-3">
                <FormikControl
                  control="input"
                  type="email"
                  label="E-mail"
                  name="email"
                  tagId="checkEmail"
                  placeholder="Enter your e-mail address"
                />
                <FormikControl
                  control="input"
                  type="password"
                  label="Password"
                  name="password"
                  tagId="checkPassword"
                  placeholder="Enter your password"
                />
                <Button variant="primary" type="submit" className="mt-2">
                  Submit
                </Button>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LogInComp;
