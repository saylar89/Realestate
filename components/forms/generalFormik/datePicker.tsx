import React from "react";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, ErrorMessage, FieldProps } from "formik";
import TextError from "./textError";

interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
  options?: { value: string; key: string }[];
}

const DatePick = (props: InputProps) => {
  const { label, name, ...rest } = props;
  return (
    <div className="mb-3 ">
      <label className="form-label text-primary font-weight-bold mr-3 ">
        {label}
      </label>
      <Field className="form-control " name={name}>
        {(props: FieldProps) => {
          const { field, form } = props;
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default DatePick;
