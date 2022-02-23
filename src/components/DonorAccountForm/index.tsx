import {
	Formik,
	FormikHelpers,
	FormikProps,
	Form,
	Field,
	FieldProps,
} from "formik";
import { DonorAccount, initialValues } from "../../utils/constants";
import SlideToggle from "../shared/SlideToggle";
import TextField from "../shared/TextField";
import "./index.css";

const DonorAccountForm = () => {

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
		<>
			<h2>
				<>Donor Account </>
			</h2>

			<Formik
				initialValues={initialValues.DONOR_ACCOUNT}
				onSubmit={(values, actions) => {
					handleSubmit(values, actions);
				}}
			>
				{({ isSubmitting, isValidating, values }) => (
					<Form>
						<SlideToggle
							id="isCompany"
							name="isCompany"
							isChecked={values.isCompany}
						/>

						<TextField id="firstName" name="firstName" placeholder="First Name" />

						<TextField id="lastName" name="lastName" placeholder="Last Name" />

						<TextField id="email" name="email" placeholder="Email" />

						<TextField id="phone" name="phone" placeholder="Phone" />

						<TextField id="address" name="address" placeholder="Address" />

						<TextField id="company" name="company" placeholder="Company" />

						<button className="button" disabled={isValidating && isSubmitting} type="submit">
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</>
	);
};
export default DonorAccountForm;
