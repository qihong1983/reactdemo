import React from 'react';

import {
  Layout,
  Menu,
  Breadcrumb,
  Icon
} from 'antd';
const {
  SubMenu
} = Menu;
const {
  Header,
  Content,
  Footer,
  Sider
} = Layout;

import {
  Router,
  Route,
  IndexRoute,
  IndexLink,
  browserHistory
} from 'react-router';

export default class Main extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
    <Header className="header" id="components-layout-demo-top-side">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={this.props.location.pathname.split("/")}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="data">
        	<IndexLink to="/data" activeClassName="active">栏目一</IndexLink>
        </Menu.Item>
        <Menu.Item key="manager">
        	<IndexLink to="/manager" activeClassName="active">栏目二</IndexLink>
        	
        </Menu.Item>
        <Menu.Item key="user">
        	<IndexLink to="/user" activeClassName="active">栏目三</IndexLink>
        </Menu.Item>
        <Menu.Item key="login">
          <IndexLink to="/login" activeClassName="active">退出</IndexLink>
        </Menu.Item>
      </Menu>
    </Header>
    {this.props.children}
    <Footer style={{backgroundColor:'white'}}>footer</Footer>
  </Layout>
    );
  }
}