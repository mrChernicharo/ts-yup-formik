import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DonorAccountForm from './components/DonorAccountForm';
import LoginForm from './components/LoginForm';
import Header from './components/shared/Header';
import './globals.css';

function Router() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />

				<Routes>
					<Route
						path="/"
						element={
							<h2>
								<>Home</>
							</h2>
						}
					/>
					<Route
						path="/donor/account"
						element={<DonorAccountForm />}
					/>
					<Route
						path="/donation/new"
						element={
							<h2>
								<>New Donation</>
							</h2>
						}
					/>
					<Route path="/login" element={<LoginForm />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default Router;
