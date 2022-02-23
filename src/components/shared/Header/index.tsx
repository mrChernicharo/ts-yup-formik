import { Link } from 'react-router-dom';
import './index.css';

const Header = () => {
	const routes = [
		{ name: 'Home', path: '/' },
		{ name: 'New Donation', path: '/donation/new' },
		{ name: 'Donor Account', path: '/donor/account' },
	];
	return (
		<div className="header-container">
			<h2>Formik Yup</h2>
			<>
				{routes.map(route => (
					<Link key={route.name} to={route.path}>
						{route.name}
					</Link>
				))}
			</>
		</div>
	);
};

export default Header;
