import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const initialValues: IProp = {
  name: "",
  email: "",
  channel: "",
};

interface IProp {
  name: string;
  email: string;
  channel: string;
}

const onSubmit = (values: IProp) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});

const YoutubeForm2 = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...formik.getFieldProps("name")} />
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        ) : null}

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" {...formik.getFieldProps("email")} />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...formik.getFieldProps("channel")} />
        {formik.touched.channel && formik.errors.channel ? (
          <div style={{ color: "red" }}>{formik.errors.channel}</div>
        ) : null}

        <button>Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm2;
