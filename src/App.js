import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container } from './components/styles/Container.styled.js';
import './App.css';
import Home from './components/Homepage';
import Register from './components/Register';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard.js';
import Modal from './components/Modal.js';

function App() {
	return (
		<>
			<Container>
				<Dashboard />
				<Modal />
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Register />} />
						<Route path="/DashboardFood" element={<Dashboard />} />
						<Route path="/signup" element={<Signup />} />
					</Routes>
				</Router>
			</Container>
			<Footer />
		</>
	);
}

export default App;
