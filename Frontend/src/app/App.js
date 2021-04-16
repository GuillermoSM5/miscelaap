import React from 'react';
<<<<<<< HEAD:Frontend/src/app/App.js
import '../scss/App.scss';
=======
import './App.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
>>>>>>> guillermoSoto:Frontend/src/App.js

function App() {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</Layout>
		</Router>
	);
}

export default App;
