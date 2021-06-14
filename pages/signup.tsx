import React, { useState, useEffect, FormEvent } from "react";
import validator from "validator";
import ReactInputEvent from "../components/event/type";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const SignUp = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [show, setShow] = useState(false);

  const onChangeFirst = (e: ReactInputEvent) => {
    setFirst(e.target.value);
  };
  const onChangeLast = (e: ReactInputEvent) => {
    setLast(e.target.value);
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
      setUsers(JSON.parse(data));
      console.log(users);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    setShowForm(false);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const errorEls: HTMLCollectionOf<Element> =
      document.getElementsByClassName("error");
    for (var i = 0; i < errorEls.length; i++) errorEls[i].innerHTML = "";
    const data = {
      firstname: first,
      lastname: last,
      age: age,
      email,
      phone,
      password: pass,
    };

    if (
      validator.isEmpty(data.email) &&
      validator.isEmpty(data.password) &&
      validator.isEmpty(data.firstname) &&
      validator.isEmpty(data.lastname) &&
      validator.isEmpty(data.age) &&
      validator.isEmpty(data.phone)
    ) {
      document.getElementById("checkEmail").innerHTML = "Please fill in email";
      document.getElementById("checkFirst").innerHTML =
        "Please fill in firstname";
      document.getElementById("checkLast").innerHTML =
        "Please fill in lastname";
      document.getElementById("checkAge").innerHTML = "Please fill in age";
      document.getElementById("checkPhone").innerHTML = "Please fill in phone";
      document.getElementById("checkPass").innerHTML =
        "Please fill in password";
    } else if (validator.isEmpty(data.email)) {
      document.getElementById("checkEmail").innerHTML = "Please fill in email";
    } else if (validator.isEmpty(data.password)) {
      document.getElementById("checkPass").innerHTML =
        "Please fill in password";
    } else if (validator.isEmpty(data.firstname)) {
      document.getElementById("checkFirst").innerHTML =
        "Please fill in firstname";
    } else if (validator.isEmpty(data.lastname)) {
      document.getElementById("checkLast").innerHTML =
        "Please fill in lastname";
    } else if (validator.isEmpty(data.age)) {
      document.getElementById("checkAge").innerHTML = "Please fill in age";
    } else if (validator.isEmpty(data.phone)) {
      document.getElementById("checkPhone").innerHTML =
        "Please fill in phone number";
    } else if (!validator.isEmail(data.email)) {
      document.getElementById("checkEmail").innerHTML =
        "Email address is not valid";
    } else if (!validator.isStrongPassword(data.password)) {
      document.getElementById("checkPass").innerHTML =
        "Your password must contain one uppercase,lowercase,number,symbol and at least 8 character";
    } else if (!validator.isInt(data.age, { min: 18 })) {
      document.getElementById("checkAge").innerHTML = "Your age must be +18";
    } else if (!validator.isMobilePhone(data.phone, "fa-IR")) {
      document.getElementById("checkPhone").innerHTML =
        "Phone number is incorrect * Sample: 0912-111-1111";
    } else if (users.length != 0) {
      users.map((i) => {
        if (i.email === data.email) {
          document.getElementById("checkEmail").innerHTML =
            "that email address is already in use";
        }
        const sum = [...users, data];
        setUsers(sum);
        localStorage.setItem("user", JSON.stringify(sum));
        setFirst("");
        setLast("");
        setAge("");
        setPhone("");
        setEmail("");
        setPass("");
        setShow(true);
      });
    } else {
      const sum = [...users, data];
      setUsers(sum);
      localStorage.setItem("user", JSON.stringify(sum));
      setFirst("");
      setLast("");
      setAge("");
      setPhone("");
      setEmail("");
      setPass("");
      setShow(true);
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
                value={first}
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
                value={last}
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
          <Modal show={show} onHide={handleClose}>
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
