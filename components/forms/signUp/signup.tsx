import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IUser } from "interfaces/user/user";
import { v4 as uuidv4 } from "uuid";
import YupPassword from "yup-password";
import TextError from "../generalFormik/textError";
require("yup-password")(Yup);
import "yup-phone";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import FormikControl from "../generalFormik/formikControl";
import ModalComponent from "../generalFormik/modal";
interface UserSignup extends IUser {
  passwordConfirmation: string;
}

const FormikContainer = () => {
  const [showForm, setShowForm] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [users, setUsers] = useState<IUser[]>([]);
  const [usersEmail, setUsersEmail] = useState<string[]>([]);
  const [usersPhone, setUsersPhone] = useState<string[]>([]);

  // const genderOptions = [
  //   { key: "Male", value: "male" },
  //   { key: "Female", value: "female" },
  // ];

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const data = localStorage.getItem("user");
      const usersList: IUser[] = JSON.parse(data!);
      setUsers(usersList);
      const userEmail: string[] = [];
      const userPhone: string[] = [];
      usersList.forEach((e) => {
        userEmail.push(e.email, e.phone);
        userPhone.push(e.phone);
      });
      setUsersEmail(userEmail);
      setUsersPhone(userPhone);
    }
  }, []);
  const handleClose = () => {
    setShowSuccessMessage(false);
    setShowForm(false);
  };

  const initialValues: UserSignup = {
    id: uuidv4(),
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirmation: "",
    // gender: "",
    // birthDate: null,
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
    // birthDate: Yup.date().required("Required").nullable(),
    password: Yup.string().password().required("Required"),
    // gender: Yup.string().required("Required"),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  return (
    <div>
      {showForm ? (
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(info: IUser, onSubmitProps) => {
              const errorEls: HTMLCollectionOf<Element> =
                document.getElementsByClassName("error");
              for (var i = 0; i < errorEls.length; i++)
                errorEls[i].innerHTML = "";
              if (users.length > 0) {
                users.forEach((i) => {
                  if (i.email === info.email) {
                    document.getElementById("checkEmail")!.innerHTML =
                      "That email address is already in use";
                  } else if (i.phone === info.phone) {
                    document.getElementById("checkPhone")!.innerHTML =
                      "That phone number is already in use";
                  } else {
                    const usersArray: IUser[] = [...users, info];
                    setUsers(usersArray);
                    localStorage.setItem("user", JSON.stringify(usersArray));
                    onSubmitProps.resetForm();
                    setShowSuccessMessage(true);
                  }
                });
              } else {
                const usersArray: IUser[] = [...users, info];
                setUsers(usersArray);
                localStorage.setItem("user", JSON.stringify(usersArray));
                onSubmitProps.resetForm();
                setShowSuccessMessage(true);
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
          <ModalComponent
            showSuccessMessage={showSuccessMessage}
            handleClose={handleClose}
            title="Congratulation"
            message="Your account created successfully"
          />
        </div>
      ) : (
        <div className=" aftersign">
          <p>Thank you for your registration</p>
          <p>Please check your email address for confirmation</p>
        </div>
      )}
    </div>
  );
};

export default FormikContainer;
