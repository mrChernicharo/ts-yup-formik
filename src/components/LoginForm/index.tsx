import { useFormik, FormikHelpers } from 'formik';
import * as yup from 'yup';
import { DonorAccount, initialValues, LoginInfo } from '../../utils/constants';
import './index.css';

interface ILoginFormProps {}
const takenEmails = ['test@gmail.com', 'test2@gmail.com', 'test3@gmail.com'];

let schema = yup.object({
	firstName: yup.string().min(2, 'TOO SHORT!').required('This is required'),
	lastName: yup.string().required('Sorry, this is required'),
	email: yup
		.string()
		.email()
		.notOneOf(takenEmails, 'Email address already in use!')
		.required('We need your Email, budy!'),
	password: yup
		.string()
		.matches(/([a-z])/, { message: 'Must include a lower case letter' })
		.matches(/([A-Z])/, { message: 'Must include an upper case letter' })
		.matches(/([0-9])/, { message: 'Must include a number' })
		.min(8, 'must have at least 8 characters')
		.required('we DO need your password'),
	confirmation: yup
		.string()
		.oneOf([yup.ref('password')], 'Passwords must match!')
		.required('Required!'),
});

const LoginForm: React.FC<ILoginFormProps> = props => {
	const formik = useFormik({
		initialValues: initialValues.LOGIN_INFO,
		validationSchema: schema,
		onSubmit: values => alert(JSON.stringify(values)),
	});

	const handleSubmit = (
		values: LoginInfo,
		actions: FormikHelpers<LoginInfo>
	) => {
		console.log({ values, actions });
	};

	const handleFocus = (e: any) => {
		console.log(e);
	};

	const handleWheel = (e: any) => {
		console.log('wheel', e);
	};

	return (
		<>
			<h2>Login</h2>
			<form className="form" onSubmit={formik.handleSubmit}>
				<label htmlFor="firstName">First Name</label>
				<input
					id="firstName"
					name="firstName"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					// onFocus={handleFocus}
					// onWheel={handleWheel}
					value={formik.values.firstName}
				/>
				<span className="error-msg">
					{formik.touched.firstName && formik.errors.firstName ? (
						<div>{formik.errors.firstName}</div>
					) : null}
				</span>

				<label htmlFor="lastName">Last Name</label>
				<input
					id="lastName"
					name="lastName"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.lastName}
				/>
				{formik.touched.lastName && formik.errors.lastName ? (
					<div>
						<span className="error-msg">
							{formik.errors.lastName}
						</span>
					</div>
				) : null}

				<label htmlFor="email">Email Address</label>
				<input
					id="email"
					name="email"
					type="email"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
				/>
				<span className="error-msg">
					{formik.touched.email && formik.errors.email ? (
						<div>{formik.errors.email}</div>
					) : null}
				</span>

				<label htmlFor="password">Password</label>
				<input
					id="password"
					name="password"
					type="password"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.password}
				/>
				<span className="error-msg">
					{formik.touched.password && formik.errors.password && (
						<div>{formik.errors.password}</div>
					)}
				</span>

				<label htmlFor="confirmation">Password Confirmation</label>
				<input
					id="confirmation"
					name="confirmation"
					type="password"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.confirmation}
				/>
				<span className="error-msg">
					{formik.touched.confirmation &&
						formik.errors.confirmation && (
							<div>{formik.errors.confirmation}</div>
						)}
				</span>

				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default LoginForm;
