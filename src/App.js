import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from './components/styles/Container.styled.js';
import './App.css';
import Home from './components/Homepage';
import Register from './components/Register';
import Signup from './components/Signup';
// import Footer from './components/Footer';
import Dashboard from './components/Dashboard.js';
import Modal from './components/Modal.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<>
			<ToastContainer />
			<Container>
				<Modal />
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Register />} />
						<Route path="/DashboardFood" element={<Dashboard />} />
						<Route path="/signup" element={<Signup />} />
					</Routes>
				</Router>
				{/* <Footer /> */}
			</Container>
		</>
	);
}

export default App;
