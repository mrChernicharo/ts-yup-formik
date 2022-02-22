import { Link } from 'react-router-dom';

const Header = () => {
	const routes = [
		{ name: 'Home', path: '/' },
		{ name: 'New Donation', path: '/donation/new' },
		{ name: 'Donor Account', path: '/donor/account' },
	];
	return (
		<>
			<h2>Formik Yup</h2>
			<>
				{routes.map(route => (
					<Link to={route.path}>{route.name}</Link>
				))}
			</>
		</>
	);
};

export default Header;
