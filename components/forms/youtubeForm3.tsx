import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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

const YoutubeForm3 = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" />

        <label htmlFor="email">E-mail</label>
        <Field type="email" id="email" name="email" />
        <ErrorMessage name="email" />

        <label htmlFor="channel">Channel</label>
        <Field type="text" id="channel" name="channel" />
        <ErrorMessage name="channel" />

        <button>Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm3;
