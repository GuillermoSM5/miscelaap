import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';

function App() {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
				</Switch>
			</Layout>
		</Router>
	);
}

export default App;
