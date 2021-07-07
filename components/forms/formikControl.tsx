import React from "react";
import Input from "./input";
import TextArea from "./textArea";
import Select from "./select";
import RadioButton from "./radioButton";
import CheckboxGroup from "./checkboxGroup";

interface FormProps {
  control: string;
  type?: string;
  label: string;
  name: string;
  placeholder?: string;
  options?: { value: string; key: string }[];
}

function FormikControl(props: FormProps) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButton {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    case "date":
    default:
      return null;
  }
}

export default FormikControl;
