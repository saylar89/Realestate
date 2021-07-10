import React from "react";
import Input from "./input";
import TextArea from "./textArea";
import Select from "./select";
import RadioButton from "./radioButton";
import CheckboxGroup from "./checkboxGroup";
import DatePick from "./datePicker";

interface FormProps {
  control: string;
  type?: string;
  label: string;
  name: string;
  placeholder?: string;
  placeholderText?: string;
  options?: { value: string; key: string }[];
}

function FormikControl(props: FormProps) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return (
        <div>
          <Input {...rest} />
          <hr />
        </div>
      );
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return (
        <div>
          <RadioButton {...rest} />
          <hr />
        </div>
      );
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    case "date":
      return (
        <div>
          <DatePick {...rest} />
          <hr />
        </div>
      );
    default:
      return null;
  }
}

export default FormikControl;
