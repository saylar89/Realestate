import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IUser } from "interfaces/user/user";
import { v4 as uuidv4 } from "uuid";
import Button from "react-bootstrap/Button";
import YupPassword from "yup-password";
import TextError from "./textError";
require("yup-password")(Yup);
import "yup-phone";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";

interface UserSignup extends IUser {
  passwordConfirmation: string;
}

const initialValues: UserSignup = {
  id: uuidv4(),
  firstName: "",
  lastName: "",
  age: "",
  email: "",
  phone: "",
  password: "",
  passwordConfirmation: "",
};

const phoneValidate = /^(\+98|0098|98|0)?9\d{9}$/;

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  age: Yup.number().required("Required").positive().integer().min(18).max(120),
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

const SignUp2 = () => {
  const [showForm, setShowForm] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [users, setUsers] = useState<IUser[]>([]);

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
  return (
    <div>
      {showForm ? (
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(data: IUser, onSubmitProps) => {
              console.log(data);
              // const InfoArray: IUser[] = Object.values(data);
              // const usersArray: IUser[] = [...users, InfoArray];
              // setUsers(usersArray);
              // localStorage.setItem("user", JSON.stringify(usersArray));
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
                    <div className="mb-3">
                      <label className="form-label" htmlFor="firstName">
                        FirstName
                      </label>
                      <Field
                        className="form-control"
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Type your firstname"
                      />
                      <ErrorMessage name="firstName" component={TextError} />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="lastName">
                        LastName
                      </label>
                      <Field
                        className="form-control"
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Type your lastname"
                      />
                      <ErrorMessage name="lastName" component={TextError} />
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor="age">
                        Age
                      </label>
                      <Field
                        className="form-control"
                        type="number"
                        id="age"
                        placeholder="Enter you age"
                        name="age"
                      />
                      <ErrorMessage name="age" component={TextError} />
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor="email">
                        E-mail
                      </label>
                      <Field
                        className="form-control"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your e-mail address"
                      />
                      <ErrorMessage name="email" component={TextError} />
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor="phone">
                        Phone Number
                      </label>
                      <Field
                        className="form-control"
                        type="number"
                        id="phone"
                        name="phone"
                        placeholder="Enter a valid phone number"
                      />
                      <ErrorMessage name="phone" component={TextError} />
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                      <Field
                        className="form-control"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Choose a strong password"
                      />
                      <ErrorMessage name="password" component={TextError} />
                    </div>

                    <div className="mb-3">
                      <label
                        className="form-label"
                        htmlFor="passwordConfirmation"
                      >
                        Password Confirmation
                      </label>
                      <Field
                        className="form-control"
                        type="password"
                        id="passwordConfirmation"
                        name="passwordConfirmation"
                        placeholder="Re-enter your password"
                      />
                      <ErrorMessage
                        name="passwordConfirmation"
                        component={TextError}
                      />
                    </div>

                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                  <div className="col"></div>
                </div>
              </div>
            </Form>
          </Formik>
          <Modal show={showSuccessMessage} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Congratulations</Modal.Title>
            </Modal.Header>
            <Modal.Body>Your account created successfully</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
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

export default SignUp2;
