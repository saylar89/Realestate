import { Field, ErrorMessage } from "formik";
import TextError from "./textError";

interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
}

const TextArea = (props: InputProps) => {
  const { label, name, placeholder, ...rest } = props;
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <Field
        className="form-control"
        as="textarea"
        id={name}
        name={name}
        placeholder={placeholder}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default TextArea;
