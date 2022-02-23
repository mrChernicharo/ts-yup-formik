import { Field } from 'formik';
import './index.css';

interface SlideToggleProps {
	id: string;
	name: string;
	isChecked: boolean;
}

const SlideToggle = ({ id, name, isChecked }: SlideToggleProps) => {
	return (
		<label className="switch">
			<Field id={id} name={name} type="checkbox" checked={isChecked} />
			<span className="slider round"></span>
		</label>
	);
};

export default SlideToggle;
