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
	Sider
} = Layout;



export default class Profile extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {


		// var dash = this.props.chilren || <ChannelDashboard />;
		return (
			<div>
			<Sider width={200} style={{ background: '#fff' }}>
		        <Menu
		          mode="inline"
		          defaultSelectedKeys={['1']}
		          defaultOpenKeys={['sub1']}
		          style={{ height: '100%', borderRight: 0 }}
		        >
		          <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
		            <Menu.Item key="1">渠道数据1</Menu.Item>
		            <Menu.Item key="2">渠道数据2</Menu.Item>
		            <Menu.Item key="3">渠道数据3</Menu.Item>
		            <Menu.Item key="4">渠道数据4</Menu.Item>
		          </SubMenu>
		          <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
		            <Menu.Item key="5">渠道数据5</Menu.Item>
		            <Menu.Item key="6">渠道数据1</Menu.Item>
		            <Menu.Item key="7">渠道数据1</Menu.Item>
		            <Menu.Item key="8">渠道数据1</Menu.Item>
		          </SubMenu>
		          <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
		            <Menu.Item key="9">渠道数据9</Menu.Item>
		            <Menu.Item key="10">渠道数据10</Menu.Item>
		            <Menu.Item key="11">渠道数据11</Menu.Item>
		            <Menu.Item key="12">渠道数据12</Menu.Item>
		          </SubMenu>
		        </Menu>
		      </Sider>
		      <Content style={{ padding: '0 24px', minHeight: 280 }}>
          		{this.props.children}

        	  </Content>
		      </div>

		);
	}
}