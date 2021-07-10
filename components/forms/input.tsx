import { Field, ErrorMessage } from "formik";
import TextError from "./textError";

interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
}

const Input = (props: InputProps) => {
  const { label, name, placeholder, ...rest } = props;
  return (
    <div className="mb-3">
      <label className="form-label text-dark font-weight-bold" htmlFor={name}>
        {label}
      </label>
      <Field
        className="form-control"
        id={name}
        name={name}
        placeholder={placeholder}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
