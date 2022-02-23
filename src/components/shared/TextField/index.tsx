import { Field } from "formik";
import React from "react";

interface Props {
  id: string,
  name: string,
  placeholder?: string,
}

const TextField = ({ name, id, placeholder }: Props) => {
  return (
    <>
      <label htmlFor={name}>First Name</label>
      <Field id={id} name={name} placeholder={placeholder} />
    </>
  );
};

export default TextField;
