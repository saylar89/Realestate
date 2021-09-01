import { Formik, Form } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/client";
import { IUser } from "interfaces/user/user";
import { v4 as uuidv4 } from "uuid";
require("yup-password")(Yup);

import { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import FormikControl from "../generalFormik/formikControl";
import NotificationContext from "store/notification-context";
import { useRouter } from "next/router";
import { ObjectId } from "mongodb";

interface UserSignup extends IUser {
  passwordConfirmation: string;
}

type UserType = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  phone: string;
  password: string;
  _id?: ObjectId;
};

async function createUser(userData: UserType) {
  const response = await fetch("/api/auth/signup2", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}

const FormikContainer = () => {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  const notificationCtx = useContext(NotificationContext);

  useEffect(() => {}, []);

  const initialValues: UserSignup = {
    id: uuidv4(),
    firstName: "",
    lastName: "",
    age: +"",
    email: "",
    phone: "",
    password: "",
    passwordConfirmation: "",
  };

  const phoneValidate = /^(\+98|0098|98|0)?9\d{9}$/;

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    age: Yup.number()
      .required("Required")
      .positive()
      .integer()
      .min(18)
      .max(120),
    email: Yup.string().email("Invalid email format").required("Required"),
    phone: Yup.string()
      .required("Required")
      .matches(phoneValidate, "Phone number is invalid - Sample : 09121112222"),
    password: Yup.string().password().required("Required"),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (info: IUser, onSubmitProps) => {
          const { firstName, lastName, age, email, phone, password } = info;
          const errorEls: HTMLCollectionOf<Element> =
            document.getElementsByClassName("error");
          for (var i = 0; i < errorEls.length; i++) errorEls[i].innerHTML = "";

          const reqBody = {
            email,
            firstName,
            lastName,
            age,
            phone,
            password,
          };

          if (isLogin) {
            return;
          } else {
            notificationCtx.showNotification({
              title: "Please wait",
              message: "Submiting your request.",
              status: "pending",
            });
            try {
              const result = await createUser(reqBody);
              if (result) {
                notificationCtx.showNotification({
                  title: "Success!",
                  message: result.message || "You registered successfully.",
                  status: "success",
                });
              }
              console.log("result", result);
            } catch (error) {
              notificationCtx.showNotification({
                title: "Error!",
                message: error.message || "Something went wrong",
                status: "error",
              });
              console.log(error);
            }
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
                  type="text"
                  label="FirstName"
                  name="firstName"
                  placeholder="Type your firstname"
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="LastName"
                  name="lastName"
                  placeholder="Type your lastname"
                />
                <FormikControl
                  control="input"
                  type="number"
                  label="Age"
                  name="age"
                  placeholder="Enter you age"
                />
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
                  type="string"
                  label="Phone Number"
                  name="phone"
                  tagId="checkPhone"
                  placeholder="Enter a valid phone number"
                />
                <FormikControl
                  control="input"
                  type="password"
                  label="Password"
                  name="password"
                  placeholder="Choose a strong password"
                />
                <FormikControl
                  control="input"
                  type="password"
                  label="Password Confirmation"
                  name="passwordConfirmation"
                  placeholder="Re-enter your password"
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

export default FormikContainer;
