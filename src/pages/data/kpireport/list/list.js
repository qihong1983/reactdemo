import React from 'react';

import {
	connect
} from 'react-redux';

import {
	Layout,
	Menu,
	Breadcrumb,
	Icon,
	Form,
	Button,
	Select,
	Table,
	DatePicker
} from 'antd';

import moment from 'moment';

const {
	MonthPicker,
	RangePicker
} = DatePicker;


const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const {
	Header,
	Content,
	Footer,
	Sider
} = Layout;

const FormItem = Form.Item;
const Option = Select.Option;
import NProgress from 'nprogress';

import {
	bindActionCreators
} from 'redux';

import cookie from 'react-cookies';

import * as actionCreators from '../../../../actions/data/kpireport/list/list.js';

class list extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		NProgress.start();

		var token = cookie.load('token');
		if (token) {
			this.props.list(token, this.props);
		} else {
			this.props.router.push('/login');
		}
	}

	componentDidMount() {
		NProgress.done();
	}

	handleChange(value) {
		console.log(value);
	}



	render() {
		var searchData = [{
			value: 1,
			text: "qihong1"
		}, {
			value: 2,
			text: "qihong2"
		}];

		var fetching = false;

		var options = searchData.map(d => <Option key={d.text}>{d.text}</Option>);

		const columns = [{
			title: 'columns1',
			dataIndex: 'appCode',
			key: 'appCode',
		}, {
			title: 'columns2',
			dataIndex: 'channelType',
			key: 'channelType',
		}, {
			title: 'columns3',
			dataIndex: 'online',
			key: 'online',
		}];



		return (
			<div>
			<Content style={{ background: '#fff', padding: 24, margin: 0}}>
          		打开浏览器，查看控制台，查看网络
        	</Content>

        <Content style={{ background: '#fff', padding: "24px", margin: 24, marginTop:"24px", minHeight: 280 }}>
          <Table dataSource={this.props.tableList} columns={columns} />
        </Content>
        </div>
		);
	}
}


//将state.counter绑定到props的counter
const mapStateToProps = (state) => {
	return {
		tableList: state.userProfile.List.tableList,
		os: state.userProfile.List.os
	}
};
//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {

	//全量
	return bindActionCreators(actionCreators, dispatch);

	// return {
	// 	init: bindActionCreators({
	// 		addTodo
	// 	}, dispatch),
	// 	init2: bindActionCreators({
	// 		init2
	// 	}, dispatch)
	// }

};

export default connect(mapStateToProps, mapDispatchToProps)(list);