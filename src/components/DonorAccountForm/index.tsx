import {
	Formik,
	FormikHelpers,
	FormikProps,
	Form,
	Field,
	FieldProps,
} from 'formik';
import './index.css';

interface DonorAccount {
	isCompany: boolean;
	firstName: string;
	lastName: string;
	company: string;
	email: string;
	address: string;
	phone: string;
}

const DonorAccountForm = () => {
	const initialValues: DonorAccount = {
		isCompany: false,
		firstName: '',
		lastName: '',
		company: '',
		email: '',
		address: '',
		phone: '',
	};

	const handleSubmit = (
		values: DonorAccount,
		actions: FormikHelpers<DonorAccount>
	) => {
		actions.setSubmitting(true);
		console.log({ values, actions });
		alert(JSON.stringify(values, null, 2));
		setTimeout(() => actions.setSubmitting(false), 1000);
	};

	return (
		<h2>
			<>Donor Account</>

			<Formik
				initialValues={initialValues}
				onSubmit={(values, actions) => {
					handleSubmit(values, actions);
				}}
			>
				{({ isSubmitting, isValidating, values }) => (
					<Form>
						{/* <Field id="isCompany" name="isCompany" /> */}
						{/* <label className="switch"> */}
						<label className="switch">
							<Field
								id="isCompany"
								name="isCompany"
								type="checkbox"
								checked={values.isCompany}
							/>
							<span className="slider round"></span>
						</label>

						<label htmlFor="firstName">First Name</label>
						<Field
							id="firstName"
							name="firstName"
							placeholder="First Name"
						/>

						<label htmlFor="lastName">Last Name</label>
						<Field
							id="lastName"
							name="lastName"
							placeholder="Last Name"
						/>

						<label htmlFor="email">Email</label>
						<Field id="email" name="email" placeholder="Email" />

						<label htmlFor="phone">Phone</label>
						<Field id="phone" name="phone" placeholder="Phone" />

						<label htmlFor="address">Address</label>
						<Field
							id="address"
							name="address"
							placeholder="Address"
						/>

						<label htmlFor="company">Company</label>
						<Field
							id="company"
							name="company"
							placeholder="Company"
						/>
						<button
							disabled={isValidating && isSubmitting}
							type="submit"
						>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</h2>
	);
};
export default DonorAccountForm;
