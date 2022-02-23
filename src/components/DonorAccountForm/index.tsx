import {
	Formik,
	FormikHelpers,
	FormikProps,
	Form,
	Field,
	FieldProps,
} from "formik";
import { useEffect } from "react";
import { DonorAccount, initialValues } from "../../utils/constants";
import SlideToggle from "../shared/SlideToggle";
import TextField from "../shared/TextField";
import "./index.css";

const DonorAccountForm = () => {
	const handleSubmit = (values: DonorAccount, actions: FormikHelpers<DonorAccount>) => {
		let submitData;

		if (values.isCompany) {
			submitData = { ...values, firstName: "", lastName: "" }
		} else {
			submitData = { ...values, company: "" };
		}
		console.log({ values, submitData, actions });

		actions.setSubmitting(true)

		alert(JSON.stringify(submitData, null, 2));
		setTimeout(() => actions.setSubmitting(false), 600);
	};

	return (
		<>
			<h2>
				<>Donor Account </>
			</h2>

			<Formik
				initialValues={initialValues.DONOR_ACCOUNT}
				onSubmit={(values, actions) => handleSubmit(values, actions)}
			>
				{({ isSubmitting, isValidating, values, handleChange, unregisterField }) => {

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
							<TextField id="phone" name="phone" placeholder="Phone" />
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
