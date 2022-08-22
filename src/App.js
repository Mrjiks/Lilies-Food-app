import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container } from './components/styles/Container.styled.js';
import Header from './components/Header';
import Home from './components/Homepage';
import Featured from './components/Featured';

function App() {
	return (
		<Container>
			<Header />
			<Home />
			<Featured />
		</Container>
	);
}

export default App;
