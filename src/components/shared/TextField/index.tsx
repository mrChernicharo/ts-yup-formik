import { Field, FieldProps, FormikProps } from "formik";
import { capitalize } from '../../../utils/functions'

interface Props {
  id: string,
  name: string,
  type?: string,
  placeholder?: string,
}

const TextField = ({ name, id, placeholder, type }: Props) => {
  return (
    <>
      <label htmlFor={name}>{capitalize(name)}</label>
      <Field id={id} type={type || 'text'} name={name} placeholder={placeholder} />
    </>
  );
};

export default TextField;
