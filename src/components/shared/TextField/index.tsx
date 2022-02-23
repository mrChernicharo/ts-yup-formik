import { Field, FieldProps, FormikProps } from "formik";
import { capitalize } from '../../../utils/functions'
import './index.css'

interface Props {
  id: string,
  name: string,
  placeholder?: string,
  label?: string,
  error?: string,
}

const TextField = ({ name, id, placeholder, error, label }: Props) => {
  return (
    <>
      <label htmlFor={name}>{capitalize(label || name)}</label>
      <Field id={id} type='text' name={name} placeholder={placeholder} />
      <span className="error-message">{error}</span>
    </>
  );
};

export default TextField;
