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

interface Contact {
  email: string;
  textarea: string;
}

const ContactComp = () => {
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

  const initialValues: Contact = {
    email: "",
    textarea: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    textarea: Yup.string().required("Required"),
  });

  return (
    <div>
      {showForm ? (
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(data: Contact, onSubmitProps) => {
              const errorEls: HTMLCollectionOf<Element> =
                document.getElementsByClassName("error");
              for (var error = 0; error < errorEls.length; error++)
                errorEls[error].innerHTML = "";

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
                      tagId="checkEmail"
                      placeholder="Enter your e-mail address"
                    />
                    <FormikControl
                      control="textarea"
                      label="Comment"
                      name="textarea"
                      placeholder="Type your message"
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

export default ContactComp;
