import { Formik, Form } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
require("yup-password")(Yup);
import "yup-phone";
import { IUser } from "interfaces/user/user";
import { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import FormikControl from "../generalFormik/formikControl";
import NotificationContext from "store/notification-context";

interface Contact {
  email: string;
  textarea: string;
}

interface Comment {
  email: string;
  text: string;
  _id: string;
}

const ContactComp = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [showComment, setShowComment] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);

  const notificationCtx = useContext(NotificationContext);

  const showCommentHandler = () => {
    setShowComment((prevState) => !prevState);
  };

  useEffect(() => {
    showComment &&
      fetch("/api/contact")
        .then((response) => response.json())
        .then((data) => setComments(data.comment));
  }, [showComment]);

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
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(data: Contact, onSubmitProps) => {
            const errorEls: HTMLCollectionOf<Element> =
              document.getElementsByClassName("error");
            for (var error = 0; error < errorEls.length; error++)
              errorEls[error].innerHTML = "";

            const reqBody = { email: data.email, text: data.textarea };

            notificationCtx.showNotification({
              title: "Please wait",
              message: "Submiting your request.",
              status: "pending",
            });

            fetch("/api/contact", {
              method: "POST",
              body: JSON.stringify(reqBody),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((response) => {
                if (response.ok) {
                  return response.json();
                }

                return response.json().then((data) => {
                  throw new Error(data.message || "Something went wrong");
                });
              })
              .then((data) => {
                notificationCtx.showNotification({
                  title: "Success!",
                  message: data.message || "Your comment successfully sent.",
                  status: "success",
                });
              })
              .catch((error) => {
                notificationCtx.showNotification({
                  title: "Error!",
                  message: error.message || "Something went wrong",
                  status: "error",
                });
              });

            onSubmitProps.resetForm();
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
      </div>
      <div
        style={{
          textAlign: "center",
          justifyContent: "center",
          marginTop: "5rem",
        }}
      >
        <button onClick={showCommentHandler}>
          {showComment ? "Hide CM" : "Show CM"}{" "}
        </button>
        <div>
          <ul style={{ listStyleType: "none" }}>
            {showComment &&
              comments.map((comment) => {
                return <li key={comment._id}>{comment.email}</li>;
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactComp;
