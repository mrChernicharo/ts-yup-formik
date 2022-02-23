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

const PhoneField = ({ name, id, placeholder, error, label }: Props) => {
	return (
		<>
			<label htmlFor={name}>{capitalize(label || name)}</label>
			<Field id={id} type='tel' name={name} placeholder={placeholder} />
			<span className="error-message">{error}</span>
		</>
	);
};

export default PhoneField;
