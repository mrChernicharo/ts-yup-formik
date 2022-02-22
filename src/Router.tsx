import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
						element={
							<h2>
								<>Donor Account</>
							</h2>
						}
					/>
					<Route
						path="/donation/new"
						element={
							<h2>
								<>New Donation</>
							</h2>
						}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default Router;
