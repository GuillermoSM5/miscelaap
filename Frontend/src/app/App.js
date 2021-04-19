import React from 'react';
import Layout from '../components/Layout/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import SignUp from '../pages/Signup';
import Login from '../pages/Login';

function App() {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/log-in' component={Login} />
					<Route path='/sign-up' component={SignUp} />
				</Switch>
			</Layout>
		</Router>
	);
}

export default App;
