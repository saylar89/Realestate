import React, { useState, useEffect, FormEvent } from "react";
import validator from "validator";
import ReactInputEvent from "../components/event/type";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { v4 as uuidv4 } from "uuid";
import { IUser } from "../interfaces/user/user";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [users, setUsers] = useState<IUser[]>([]);
  const [showForm, setShowForm] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onChangeFirst = (e: ReactInputEvent) => {
    setFirstName(e.target.value);
  };
  const onChangeLast = (e: ReactInputEvent) => {
    setLastName(e.target.value);
  };
  const onChangeAge = (e: ReactInputEvent) => {
    setAge(e.target.value);
  };
  const onChangeEmail = (e: ReactInputEvent) => {
    setEmail(e.target.value);
  };
  const onChangePhone = (e: ReactInputEvent) => {
    setPhone(e.target.value);
  };
  const onChangePass = (e: ReactInputEvent) => {
    setPass(e.target.value);
  };

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

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const errorEls: HTMLCollectionOf<Element> =
      document.getElementsByClassName("error");
    for (var i = 0; i < errorEls.length; i++) errorEls[i].innerHTML = "";
    const user: IUser = {
      id: uuidv4(),
      firstName: firstName,
      lastName: lastName,
      age: +age,
      email,
      phone,
      password: pass,
    };

    if (
      validator.isEmpty(user.email) &&
      validator.isEmpty(user.password) &&
      validator.isEmpty(user.firstName) &&
      validator.isEmpty(user.lastName) &&
      validator.isEmpty("" + user.age) &&
      validator.isEmpty(user.phone)
    ) {
      document.getElementById("checkEmail")!.innerHTML = "Please fill in email";
      document.getElementById("checkFirst")!.innerHTML =
        "Please fill in firstname";
      document.getElementById("checkLast")!.innerHTML =
        "Please fill in lastname";
      document.getElementById("checkAge")!.innerHTML = "Please fill in age";
      document.getElementById("checkPhone")!.innerHTML = "Please fill in phone";
      document.getElementById("checkPass")!.innerHTML =
        "Please fill in password";
    } else if (validator.isEmpty(user.email)) {
      document.getElementById("checkEmail")!.innerHTML = "Please fill in email";
    } else if (validator.isEmpty(user.password)) {
      document.getElementById("checkPass")!.innerHTML =
        "Please fill in password";
    } else if (validator.isEmpty(user.firstName)) {
      document.getElementById("checkFirst")!.innerHTML =
        "Please fill in firstname";
    } else if (validator.isEmpty(user.lastName)) {
      document.getElementById("checkLast")!.innerHTML =
        "Please fill in lastname";
    } else if (validator.isEmpty("" + user.age)) {
      document.getElementById("checkAge")!.innerHTML = "Please fill in age";
    } else if (validator.isEmpty(user.phone)) {
      document.getElementById("checkPhone")!.innerHTML =
        "Please fill in phone number";
    } else if (!validator.isEmail(user.email)) {
      document.getElementById("checkEmail")!.innerHTML =
        "Email address is not valid";
    } else if (!validator.isStrongPassword(user.password)) {
      document.getElementById("checkPass")!.innerHTML =
        "Your password must contain one uppercase,lowercase,number,symbol and at least 8 character";
    } else if (!validator.isInt("" + user.age, { min: 18 })) {
      document.getElementById("checkAge")!.innerHTML = "Your age must be +18";
    } else if (!validator.isInt("" + user.age, { max: 120 })) {
      document.getElementById("checkAge")!.innerHTML =
        "Your input age is not correct";
    } else if (!validator.isMobilePhone(user.phone, "fa-IR")) {
      document.getElementById("checkPhone")!.innerHTML =
        "Phone number is incorrect * Sample: 0912-111-1111";
    } else if (users.length != 0) {
      users.forEach((i) => {
        if (i.email === user.email) {
          document.getElementById("checkEmail")!.innerHTML =
            "That email address is already in use";
        } else if (i.phone === user.phone) {
          document.getElementById("checkPhone")!.innerHTML =
            "That phone number is already in use";
        } else {
          const usersArray: IUser[] = [...users, user];
          setUsers(usersArray);
          localStorage.setItem("user", JSON.stringify(usersArray));
          setFirstName("");
          setLastName("");
          setAge("");
          setPhone("");
          setEmail("");
          setPass("");
          setShowSuccessMessage(true);
        }
      });
    } else {
      const usersArray = [...users, user];
      setUsers(usersArray);
      localStorage.setItem("user", JSON.stringify(usersArray));
      setFirstName("");
      setLastName("");
      setAge("");
      setPhone("");
      setEmail("");
      setPass("");
      setShowSuccessMessage(true);
    }
  };

  return (
    <>
      {showForm ? (
        <div>
          <Form style={{ width: "50%" }} className="form">
            <Form.Group controlId="firstname">
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Your firstname"
                onChange={onChangeFirst}
                value={firstName}
              />
              <p id="checkFirst" className="error"></p>
            </Form.Group>
            <Form.Group controlId="lastname">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                type="text"
                size="sm"
                placeholder="Your lastname"
                onChange={onChangeLast}
                value={lastName}
              />
              <p id="checkLast" className="error"></p>
            </Form.Group>
            <Form.Group controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                size="sm"
                placeholder="Your age"
                onChange={onChangeAge}
                value={age}
              />
              <p id="checkAge" className="error"></p>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                size="sm"
                placeholder="Your email address"
                onChange={onChangeEmail}
                value={email}
              />
              <p id="checkEmail" className="error"></p>
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Sample: 0912-111-1111"
                size="sm"
                onChange={onChangePhone}
                value={phone}
              />
              <p id="checkPhone" className="error"></p>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                size="sm"
                placeholder="Choose a strong password"
                onChange={onChangePass}
                value={pass}
              />
              <p id="checkPass" className="error"></p>
            </Form.Group>
            <Button variant="primary" onClick={onSubmit} type="submit">
              Submit
            </Button>
          </Form>
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
    </>
  );
};

export default SignUp;
