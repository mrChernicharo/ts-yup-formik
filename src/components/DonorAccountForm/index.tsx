import {
	Formik,
	FormikHelpers,
	FormikProps,
	Form,
	Field,
	FieldProps,
} from "formik";
import * as yup from 'yup';
import { DonorAccount, initialValues } from "../../utils/constants";
import SlideToggle from "../shared/SlideToggle";
import TextField from "../shared/TextField";
import "./index.css";

let schema = yup.object().shape({
	firstName: yup.string(),
	lastName: yup.string(),
	company: yup.string(),
	email: yup.string().email().required(),
	isCompany: yup.boolean().required(),
	phone: yup.number().required()
})

const DonorAccountForm = () => {
	const handleSubmit = async (values: DonorAccount, actions: FormikHelpers<DonorAccount>) => {
		console.log({ values, actions });

		schema.validate(values).then(result => {
			let submitData;

			if (values.isCompany)
				submitData = { ...values, firstName: "", lastName: "" }
			else
				submitData = { ...values, company: "" };



			actions.setSubmitting(true)

			alert(JSON.stringify(submitData, null, 2));
			setTimeout(() => actions.setSubmitting(false), 600);
			console.log({ result })

		}).catch(err => {
			console.log({ err })
			alert(JSON.stringify(err, null, 2));

		})

	};

	return (
		<>
			<h2>
				<>Donor Account</>
			</h2>

			<Formik
				initialValues={initialValues.DONOR_ACCOUNT}
				onSubmit={(values, actions) => handleSubmit(values, actions)}
			>
				{({ values, isValidating, isSubmitting }: FormikProps<DonorAccount>) => {
					return (
						<Form className="form">
							<SlideToggle
								id="isCompany"
								name="isCompany"
								isChecked={values.isCompany}
							/>
							{!values.isCompany && (
								<>
									<TextField id="firstName" name="firstName" placeholder="First Name" />
									<TextField id="lastName" name="lastName" placeholder="Last Name" />
								</>
							)}
							{values.isCompany && (
								<TextField id="company" name="company" placeholder="Company" />
							)}
							<TextField id="email" name="email" placeholder="Email" />
							<TextField id="phone" name="phone" type="tel" placeholder="555-5555" />
							<TextField id="address" name="address" placeholder="Address" />

							<button
								type="submit"
								className="button"
								disabled={!isValidating && isSubmitting}
							>
								Submit
							</button>
						</Form>
					)
				}}
			</Formik>
		</>
	);
};
export default DonorAccountForm;
