import React from 'react';
import Layout from '../components/Layout/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import SignUp from '../pages/Signup/Signup';
import Login from '../pages/Login/Login';
import '../scss/App.scss';

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
