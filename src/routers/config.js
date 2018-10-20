 import React from 'react';


 import {
 	Router,
 	Route,
 	IndexRoute,
 	IndexRedirect,
 	Redirect,
 	browserHistory
 } from 'react-router';


 import NProgress from 'nprogress';

 //登录登录前
 //import Login from '../pages/login/login';
 import Login from '../pages/login/login';
 //登录后
 //import Main from '../pages/main';
 import Main from '../pages/main';

 import Data from '../pages/data/data';
 import Manager from '../pages/manager/manager';
 import User from '../pages/user/user';

 import UserProfile from '../pages/data/userprofile/userProfile';
 import UserProfileList from '../pages/data/userprofile/list/list';
 import UserProfileEdit from '../pages/data/userprofile/edit/edit';



 import KpiReport from '../pages/data/kpireport/kpireport';
 import KpiReportList from '../pages/data/kpireport/list/list';


 import Channel from '../pages/manager/list/list';
 import ChannelList from '../pages/manager/list/list/list';

 import Group from '../pages/manager/group/group';
 import ChannelGroup from '../pages/manager/group/list/list';

 import UserList from '../pages/user/userlist/list';
 import UserListIndex from '../pages/user/userlist/list/index';



 export default class Routers extends React.Component {

 	constructor(props) {
 		super(props);
 	}


 	render() {

 		return (
 			<div>
 			<Router history={this.props.history}>
 			  <Route path="/login" component={Login}>				
 			  </Route>
		<Route path="/" component={Main}>
				 <IndexRedirect to="data" />
	          
	            <Route path="data" component={Data}>
	            	<IndexRedirect to="userprofile"  />
	            	{/*<IndexRoute component={ChannelDashrd} />*/}
	            	<Route path="userprofile" component={UserProfile} name="profile" state={{currentPage
: "aaa",asdfa: "asdfasd"}}>
	            		<IndexRoute component={UserProfileList} state={{currentPage
: "aaa",asdfa: "asdfasd2"}}/>
	            		<Route path="edit/:id" component={UserProfileEdit} state={{currentPage
: "aaa",asdfa: "asdfasd2"}}>
	            		</Route>
	            	</Route>

	            	<Route path="kpireport" component={KpiReport}>
	            		<IndexRoute component={KpiReportList} />
	            	</Route>
	            	
	            </Route>
	            <Route path="manager" component={Manager}>
	            	<IndexRedirect to="list" />
					<Route  path="list" component={Channel}>
	            		<IndexRoute component={ChannelList} />
	            	</Route>
	            	<Route  path="group" component={Group}>
	            		<IndexRoute component={ChannelGroup} />
	            	</Route>
	            </Route>


	            <Route path="user" component={User}>
	            	<IndexRedirect to="list" />
	            	<Route  path="list" component={UserList}>
	            		<IndexRoute component={UserListIndex} />
	            	</Route>
	            </Route>
			  
			  </Route>
			  <Redirect from='*' to='data' />
			</Router>
			</div>
 		);
 	}
 }
