import { Field, ErrorMessage } from "formik";
import TextError from "./textError";

interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
  options?: { value: string; key: string }[];
}

const Select = (props: InputProps) => {
  const { label, name, placeholder, options, ...rest } = props;
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <Field
        className="form-control"
        as="select"
        id={name}
        name={name}
        placeholder={placeholder}
        {...rest}
      >
        {options &&
          options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.key}
              </option>
            );
          })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
