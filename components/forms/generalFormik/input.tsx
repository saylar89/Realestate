import { Field, ErrorMessage } from "formik";
import TextError from "./textError";

interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
  tagId?: string;
}

const Input = (props: InputProps) => {
  const { label, name, placeholder, tagId, ...rest } = props;
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
      <p id={tagId} className="error"></p>
    </div>
  );
};

export default Input;





