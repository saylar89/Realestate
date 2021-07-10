import { Formik, Form } from "formik";
import * as Yup from "yup";
import { IUser } from "interfaces/user/user";
import { v4 as uuidv4 } from "uuid";
import YupPassword from "yup-password";
import TextError from "./textError";
require("yup-password")(Yup);
import "yup-phone";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import FormikControl from "./formikControl";
import ModalComponent from "./modal";

interface UserSignup extends IUser {
  passwordConfirmation: string;
}

const FormikContainer = () => {
  const [showForm, setShowForm] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const genderOptions = [
    { key: "Male", value: "male" },
    { key: "Female", value: "female" },
  ];

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
    gender: "",
    birthDate: null,
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
    birthDate: Yup.date().required("Required").nullable(),
    password: Yup.string().password().required("Required"),
    gender: Yup.string().required("Required"),
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
            onSubmit={(data: IUser, onSubmitProps) => {
              console.log(data);
              onSubmitProps.resetForm();
              setShowSuccessMessage(true);
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
                    {/* <FormikControl
                      control="radio"
                      label="Gender"
                      name="gender"
                      options={genderOptions}
                    /> */}
                    <FormikControl
                      control="input"
                      type="number"
                      label="Age"
                      name="age"
                      placeholder="Enter you age"
                    />
                    {/* <FormikControl
                      control="date"
                      label="Birthday"
                      name="birthDate"
                      placeholderText="Choose your birthday"
                    /> */}
                    <FormikControl
                      control="input"
                      type="email"
                      label="E-mail"
                      name="email"
                      placeholder="Enter your e-mail address"
                    />
                    <FormikControl
                      control="input"
                      type="number"
                      label="Phone Number"
                      name="phone"
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
