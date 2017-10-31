import React from 'react';

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
import NProgress from 'nprogress';
export default class list extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		NProgress.start();
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
			title: '操作系统',
			dataIndex: 'appCode',
			key: 'appCode',
		}, {
			title: '渠道类型',
			dataIndex: 'channelType',
			key: 'channelType',
		}, {
			title: '线上线下',
			dataIndex: 'online',
			key: 'online',
		}];

		return (
			<div>
			<Content style={{ background: '#fff', padding: 24, margin: 0}}>
          <Form layout="inline">
          	<FormItem label="操作系统">
          		<Select 
          			placeholder="Select a option and change input text above" 
          			dropdownMatchSelectWidth={true}  
          			defaultValue=""
          			style={{width:"100px"}}>
	          		<Option value="">全部</Option>
		            <Option value="24">Android</Option>
		            <Option value="27">iOS</Option>
	            </Select>
          	</FormItem>
          	<FormItem label="线上\线下">
          		<Select 
          			placeholder="Select a option and change input text above" 
          			dropdownMatchSelectWidth={true}
          		 	defaultValue="" 
          		 	style={{width:'100px'}}>
	          		<Option value="">全部</Option>
		            <Option value="1">线上</Option>
		            <Option value="2">线下</Option>
	            </Select>
          	</FormItem>

			<FormItem label="渠道组">
          		<Select 
          			showSearch={true}
          			placeholder="搜索渠道组" 
          			dropdownMatchSelectWidth={true}
          		 	defaultValue=""
          		 	style={{width:'160px'}}
          		 	optionFilterProp="children"
          		 	onChange={this.handleChange.bind(this)}>
	          		<Option value="">全部</Option>
		            <Option value="1">samsung_total_news</Option>
		            <Option value="2">kp_total_news</Option>
		            <Option value="3">oppo_total_news</Option>
	            </Select>
          	</FormItem>

			<FormItem label="">
          		<Select 
			        mode="combobox"
			        placeholder="搜索渠道名称"
			        notFoundContent=""
			        style={{width:"100px"}}
			        defaultActiveFirstOption={false}
			        showArrow={false}
			        filterOption={false}
          		 >
				{options}
	            </Select>
          	</FormItem>

			<FormItem label="" >
	          	<RangePicker size="large"
			      defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
			      format={dateFormat}
			      style={{width:"260px"}}
			    />
			</FormItem>
          	 <Button size="large" type="primary">查询</Button>

          </Form>
        </Content>

                <Content style={{ background: '#fff', padding: "24px", margin: 24, marginTop:"24px", minHeight: 280 }}>
          <Table dataSource={this.props.tableList} columns={columns} />
        </Content>
        </div>
		);
	}
}