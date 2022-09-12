
import React from 'react';
import ReactDOM from 'react-dom/client';
// import './App.css';
import App from './App';
import Footer from './components/Footer';

//Bootstrap config
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/react-bootstrap/dist/react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
		<Footer/>
	</React.StrictMode>,
);
