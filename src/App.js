import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container } from './components/styles/Container.styled.js';
import Header from './components/Header';
import Home from './components/Homepage';
import Featured from './components/Featured';
import SpecialFeatureHeading from './components/SpecialFeatureHeading';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Container>
				<Header />
				<Home />
				<SpecialFeatureHeading />
				<Featured />
				<CallToAction />
			</Container>
			<Footer />
		</>
	);
}

export default App;
