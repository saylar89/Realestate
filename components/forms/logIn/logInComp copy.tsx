import { Formik, Form } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
require("yup-password")(Yup);
import "yup-phone";
import { IUser } from "interfaces/user/user";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import FormikControl from "../generalFormik/formikControl";
import ModalComponent from "../generalFormik/modal";

interface UserSignup {
  email: string;
  password: string;
}

const LogInComp = () => {
  const [showForm, setShowForm] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [users, setUsers] = useState<IUser[]>([]);
  const [userFound, setUserFound] = useState<IUser>();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const data = localStorage.getItem("user");
      const usersList: IUser[] = JSON.parse(data!);
      setUsers(usersList);
    }
  }, []);

  const handleClose = () => {
    setShowSuccessMessage(false);
    setShowForm(false);
  };

  const initialValues: UserSignup = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().password().required("Required"),
  });

  return (
    <div>
      {showForm ? (
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(data: UserSignup, onSubmitProps) => {
              const errorEls: HTMLCollectionOf<Element> =
                document.getElementsByClassName("error");
              for (var error = 0; error < errorEls.length; error++)
                errorEls[error].innerHTML = "";

              if (users.length > 0) {
                users.forEach((user) => {
                  if (user.email === data.email) {
                    setUserFound(user);
                    console.log(setUserFound);
                  }
                });
              } else {
                document.getElementById("checkEmail")!.innerHTML =
                  "User not found! Please sign up first";
              }

              if (userFound) {
                if (userFound.password === data.password) {
                  onSubmitProps.resetForm();
                  setShowSuccessMessage(true);
                } else {
                  document.getElementById("checkPassword")!.innerHTML =
                    "Your password is incorrect";
                }
              } else {
                document.getElementById("checkEmail")!.innerHTML =
                  "User not found! Please sign up first";
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
          <ModalComponent
            showSuccessMessage={showSuccessMessage}
            handleClose={handleClose}
            title="Correct email and password"
            message="You Have Successfully Logged in"
          />
        </div>
      ) : (
        <div className=" aftersign">
          <p>You Have Successfully Logged in</p>
        </div>
      )}
    </div>
  );
};

export default LogInComp;
