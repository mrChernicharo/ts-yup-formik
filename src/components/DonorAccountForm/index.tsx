import {
	Formik,
	FormikHelpers,
	FormikProps,
	Form,
	Field,
	FieldProps,
	yupToFormErrors,
} from "formik";
import { useMemo } from "react";
import * as yup from 'yup';
import { DonorAccount, initialValues } from "../../utils/constants";
import PhoneField from "../shared/PhoneField";
import SlideToggle from "../shared/SlideToggle";
import TextField from "../shared/TextField";
import "./index.css";

let schema = yup.object({
	firstName: yup.string(),
	lastName: yup.string(),
	company: yup.string(),
	email: yup.string().required().email(),
	isCompany: yup.boolean().required(),
	phone: yup.number().required(),
	address: yup.string().required()
})
const DonorAccountForm = () => {

	const handleSubmit = async (values: DonorAccount, actions: FormikHelpers<DonorAccount>) => {
		console.log({ values, actions });

		let submitData;
		if (values.isCompany)
			submitData = { ...values, firstName: "", lastName: "" }
		else
			submitData = { ...values, company: "" };

		actions.setSubmitting(true)

		// alert(JSON.stringify(submitData, null, 2));
		setTimeout(() => actions.setSubmitting(false), 600);
		console.log({ submitData })

	};

	const onUpdate = useMemo(() => (values: DonorAccount) => {
		// console.log(values)
		// schema.validate(values, { recursive: true }).then(result => {

		// }).catch(err => {

		// })
	}, [])

	return (
		<>
			<h2>
				<>Donor Account</>
			</h2>

			<Formik
				initialValues={initialValues.DONOR_ACCOUNT}
				validationSchema={schema}
				onSubmit={(values, actions) => handleSubmit(values, actions)}
				validate={onUpdate}
			>
				{({ values, isValidating, isSubmitting, errors, touched, isValid }: FormikProps<DonorAccount>) => {
					return (
						<Form className="form">


							<SlideToggle
								id="isCompany"
								name="isCompany"
								isChecked={values.isCompany}
							/>
							{!values.isCompany && (
								<>
									<TextField id="firstName" name="firstName" label="First name" placeholder="First Name" />
									<TextField id="lastName" name="lastName" label="Last name" placeholder="Last Name" />
								</>
							)}
							{values.isCompany && (
								<TextField id="company" name="company" label="Company name" placeholder="Company Name" />
							)}
							<TextField id="email" name="email" label="Email" placeholder="Email" error={errors.email} />
							<PhoneField id="phone" name="phone" label="Phone" placeholder="555-5555" error={errors.phone} />
							<TextField id="address" name="address" label="Adress" placeholder="Address" error={errors.address} />

							<button
								type="submit"
								className="button"
								disabled={!isValidating && isSubmitting}
							>
								Submit
							</button>


							<div>Form {isValid ? 'valid' : 'invalid'}</div>
							<div>Touched: {JSON.stringify(Object.keys(touched))}</div>
							<div>Errored Fields: {JSON.stringify(Object.keys(errors))}</div>
						</Form>
					)
				}}
			</Formik>
		</>
	);
};
export default DonorAccountForm;
