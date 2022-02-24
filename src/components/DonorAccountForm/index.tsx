import {
	Formik,
	FormikHelpers,
	FormikProps,
	Form,
	Field,
	FieldProps,
	yupToFormErrors,
} from 'formik';
import { useMemo } from 'react';
import * as yup from 'yup';
import { DonorAccount, initialValues } from '../../utils/constants';
import { Fade } from '../shared/Fade';
import PhoneField from '../shared/PhoneField';
import SlideToggle from '../shared/SlideToggle';
import TextField from '../shared/TextField';
import './index.css';

let schema = yup.object({
	firstName: yup
		.string()
		.when('isCompany', { is: false, then: yup.string().required() }),
	lastName: yup
		.string()
		.when('isCompany', { is: false, then: yup.string().required() }),
	company: yup
		.string()
		.when('isCompany', { is: true, then: yup.string().required() }),
	email: yup.string().email().required('We need your Email, pal!'),
	isCompany: yup.boolean().required(),
	phone: yup.number().min(6).required('we need your Phone number'),
	address: yup.string().required('we need your address'),
});

const DonorAccountForm = () => {
	const handleSubmit = async (
		values: DonorAccount,
		actions: FormikHelpers<DonorAccount>
	) => {
		console.log({ values, actions });

		let submitData: any = null;
		if (values.isCompany)
			submitData = { ...values, firstName: '', lastName: '' };
		else submitData = { ...values, company: '' };

		actions.setSubmitting(true);
		console.log('submitting!');

		setTimeout(() => {
			console.log({ submitData });
			// alert(JSON.stringify(submitData, null, 2));
			actions.setSubmitting(false);
		}, 600);
	};

	const onUpdate = useMemo(
		() => (values: DonorAccount) => {
			// console.log(values)
			// schema.validate(values, { recursive: true }).then(result => {
			// }).catch(err => {
			// })
		},
		[]
	);

	return (
		<>
			<h2>
				<>Donor Account</>
			</h2>

			<Formik
				initialValues={initialValues.DONOR_ACCOUNT}
				validationSchema={schema}
				onSubmit={(values, actions) => handleSubmit(values, actions)}
				// validate={onUpdate}
			>
				{({
					values,
					isValidating,
					isSubmitting,
					errors,
					touched,
					isValid,
				}: FormikProps<DonorAccount>) => {
					return (
						<Form className="form">
							<SlideToggle
								id="isCompany"
								name="isCompany"
								checked={values.isCompany}
							/>
							{/* 
							<Fade shouldHide={values.isCompany}>
								<h3>Company</h3>
							</Fade> */}

							<Fade shouldHide={!values.isCompany}>
								<TextField
									id="firstName"
									name="firstName"
									label="First name"
									placeholder="First Name"
									error={
										!!touched.firstName &&
										!!errors.firstName
									}
									errorMessage={errors.firstName}
								/>
								<TextField
									id="lastName"
									name="lastName"
									label="Last name"
									placeholder="Last Name"
									error={
										!!touched.lastName && !!errors.lastName
									}
									errorMessage={errors.lastName}
								/>
							</Fade>
							<Fade shouldHide={values.isCompany}>
								<TextField
									id="company"
									name="company"
									label="Company name"
									placeholder="Company Name"
								/>
							</Fade>
							<TextField
								id="email"
								name="email"
								label="Email"
								placeholder="Email"
								error={!!touched.email && !!errors.email}
								errorMessage={errors.email}
							/>
							<PhoneField
								id="phone"
								name="phone"
								label="Phone"
								placeholder="555-5555"
								error={touched.phone && !!errors.phone}
								errorMessage={errors.phone}
							/>
							<TextField
								id="address"
								name="address"
								label="Adress"
								placeholder="Address"
								error={!!touched.address && !!errors.address}
							/>

							<button
								type="submit"
								className="button"
								disabled={!isValidating && isSubmitting}
							>
								Submit
							</button>

							<div className="values">
								<div>Form {isValid ? 'valid' : 'invalid'}</div>
								<div>
									Touched:{' '}
									{JSON.stringify(Object.keys(touched))
										.replace(/(\"|\[|\])/g, '')
										.replace(/,/g, ', ')}
								</div>
								<div>
									Errored Fields:{' '}
									{JSON.stringify(Object.keys(errors))}
								</div>
							</div>
						</Form>
					);
				}}
			</Formik>
		</>
	);
};
export default DonorAccountForm;
