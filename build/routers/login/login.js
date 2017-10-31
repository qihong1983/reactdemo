 import React from 'react';
 import {
 	Router,
 	Route,
 	IndexRoute,
 	IndexRedirect,
 	browserHistory
 } from 'react-router';

 //登录
 import Login from '../../pages/login/login';

 export default (
 	<div>
 		<Route path="/login" component={Login}>	
 			 
 		</Route>
 	</div>
 );