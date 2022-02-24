import { Field, FieldProps, FormikProps } from 'formik';
import { capitalize } from '../../../utils/functions';
import './index.css';

interface Props {
	id: string;
	name: string;
	placeholder?: string;
	error?: boolean;
	label?: string;
	errorMessage?: string;
}

const PhoneField = ({
	name,
	id,
	placeholder,
	error,
	errorMessage,
	label,
}: Props) => {
	return (
		<>
			<label htmlFor={name}>{capitalize(label || name)}</label>
			<Field id={id} type="tel" name={name} placeholder={placeholder} />
			{error && <span className="error-message">{errorMessage}</span>}
		</>
	);
};

export default PhoneField;
