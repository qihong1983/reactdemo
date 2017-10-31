 "use strict"

 import React from 'react';
 import ReactDOM from 'react-dom';
 import PropTypes from 'prop-types';

 import {
 	createStore,
 	applyMiddleware
 } from 'redux';


 import {
 	connect,
 	Provider
 } from 'react-redux';

 const thunk = require('redux-thunk').default;

 import {
 	Router,
 	Route,
 	IndexRoute,
 	IndexRedirect,
 	browserHistory
 } from 'react-router';


 import Main from './pages/main';
 import Profile from './pages/data/profile';
 import Manager from './pages/manager/manager';
 import User from './pages/user/user';

 import ChannelDashrd from './pages/data/channelDashrd';

 class App extends React.Component {


 	constructor(props) {
 		super(props);
 	}

 	render() {

 		debugger;
 		return (
 			<Router history={browserHistory}>
			  <Route path="/" component={Main}>
				
	          
	            <Route path="data" component={Profile} >
	            	
	            	<IndexRoute commponent={ChannelDashrd} />
	            	{/*<Route path="aaa" component={ChannelDashrd} />*/}

	            </Route>
	            <Route path="/manager" component={Manager} />
	            <Route path="/user" component={User} />
			  
			  </Route>
			</Router>
 		);
 	}
 }

 App.propTypes = {
 	name: React.PropTypes.string,
 };

 ReactDOM.render(
 	<App />,
 	document.getElementById('test')
 );