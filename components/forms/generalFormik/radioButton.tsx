import { Field, ErrorMessage, FieldProps } from "formik";
import React from "react";
import TextError from "./textError";

interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
  options?: { value: string; key: string }[];
}

// interface FieldProp {
//     field:{name:string; onBlur():void; onChange():void; value:string}
// }

const RadioButton = (props: InputProps) => {
  const { label, name, placeholder, options, ...rest } = props;
  return (
    <div className="mb-3 ">
      <label className="form-label text-primary font-weight-bold mr-3 ">
        {label}
      </label>
      <Field className="form-control " name={name} {...rest}>
        {(props: FieldProps) => {
          const { field } = props;
          return (
            options &&
            options.map((option) => {
              return (
                <React.Fragment key={option.key}>
                  <div className="form-check d-inline-flex mr-2 ">
                    <input
                      className="form-check-input "
                      type="radio"
                      id={option.value}
                      {...field}
                      value={option.value}
                      checked={field.value === option.value}
                    />
                    <label
                      className="form-check-label"
                      style={{ fontSize: 13 }}
                      htmlFor={option.value}
                    >
                      {option.key}
                    </label>
                  </div>
                </React.Fragment>
              );
            })
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default RadioButton;
