import { Formik, Form } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
require("yup-password")(Yup);
import "yup-phone";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import FormikControl from "./formikControl";
import ModalComponent from "./modal";

interface UserSignup {
  email: string;
  password: string;
}

const LogInComp = () => {
  const [showForm, setShowForm] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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
                      type="email"
                      label="E-mail"
                      name="email"
                      placeholder="Enter your e-mail address"
                    />
                    <FormikControl
                      control="input"
                      type="password"
                      label="Password"
                      name="password"
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
