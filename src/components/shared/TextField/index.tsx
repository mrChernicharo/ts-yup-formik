import { Field } from "formik";
import { capitalize } from '../../../utils/functions'

interface Props {
  id: string,
  name: string,
  placeholder?: string,
}

const TextField = ({ name, id, placeholder }: Props) => {
  return (
    <>
      <label htmlFor={name}>{capitalize(name)}</label>
      <Field id={id} name={name} placeholder={placeholder} />
    </>
  );
};

export default TextField;
