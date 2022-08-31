import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from './components/styles/Container.styled.js';
import './App.css';
import Home from './components/Homepage';
import Register from './components/Register';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoutes from 'components/ProtectedRoutes.js';

function App() {
	return (
		<>
			<ToastContainer />
			<Container>
				<Router>
					<Routes>
						<Route element={<ProtectedRoutes />}>
							<Route path="/DashboardFood" element={<Dashboard />} />
						</Route>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Register />} />
						<Route path="/signup" element={<Signup />} />
					</Routes>
				</Router>
				{/* <Footer /> */}
			</Container>
		</>
	);
}

export default App;
