import {
	Form,
	Icon,
	Input,
	Button,
	Checkbox
} from 'antd';
const FormItem = Form.Item;

import React from 'react';

import cookie from 'react-cookies';
import NProgress from 'nprogress';

var QRCode = require('qrcode.react');

var uuid = require('react-native-uuid');

class Login extends React.Component {


	constructor(props) {
		super(props);

		this.state = {
			uuid: "no",
			qrcodeHeight: 0
		}

		this.timer = null;
	}

	componentWillMount() {
		NProgress.start();
	}



	componentWillUnmount() {
		clearInterval(this.timer);
	}

	forFetch() {

		clearInterval(this.timer);
		this.timer = setInterval(async function() {


			let res = await fetch("http://tokendemo.youyong.ba/queryUuid", {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					"uuid": this.state.uuid
				})
			});

			// let json = res.json();

			// await res.then(function(res) {

			// 	res.json().then(res => {

			// 		if (res.status) {
			// 			console.log(res.data[0]);
			// 			if (res.data[0].token !== "") {
			// 				cookie.save('token', res.data[0].token, {
			// 					path: '/'
			// 				});

			// 				clearInterval(this.timer);
			// 				//登录成功跳转到默认页面
			// 				this.props.router.push('/data/userprofile');
			// 			}

			// 		}

			// 	});

			// }.bind(this))

			var json = await res.json();

			console.log(json);

			if (json.status) {
				console.log(json.data[0]);
				if (json.data[0].token !== "") {
					cookie.save('token', json.data[0].token, {
						path: '/'
					});

					clearInterval(this.timer);
					//登录成功跳转到默认页面
					this.props.router.push('/data/userprofile');
				}

			}


		}.bind(this), 1000)


	}

	componentDidMount() {

		cookie.remove('token', {
			path: '/'
		});
		NProgress.done();

		console.log(uuid.v4(), 'uuid.v4');
		// this.timer = null;
		clearInterval(this.timer);
		let res = fetch("http://tokendemo.youyong.ba/installUuid", {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				"uuid": uuid.v4()
			})
		});

		// let json = res.json();

		res.then(function(res) {

			res.json().then(res => {

				if (res.status) {
					this.setState({
						uuid: res.data,
						qrcodeHeight: "auto"
					}, function() {
						this.forFetch();
					}.bind(this));

				}

			});

		}.bind(this))
	}


	toQueryString(obj) {
		return obj ? Object.keys(obj).sort().map(function(key) {
			var val = obj[key];
			if (Array.isArray(val)) {
				return val.sort().map(function(val2) {
					return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
				}).join('&');
			}

			return encodeURIComponent(key) + '=' + encodeURIComponent(val);
		}).join('&') : '';
	}

	handleSubmit(e) {
		e.preventDefault();



		this.props.form.validateFields((err, values) => {

			if (!err) {
				console.log('Received values of form: ', values);
			} else {
				console.log(values, '成功');
			}
			fetch("http://tokendemo.youyong.ba/token", {
				method: 'POST',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: this.toQueryString({
					username: values.userName,
					password: values.password
				})
			}).then(function(res) {

				// res.status = 200;
				res.json().then(res => {

					if (res.status) {
						cookie.save('token', res.token, {
							path: '/'
						});

						clearInterval(this.timer);
						//登录成功跳转到默认页面
						console.log(this.props.router.push('/data/userprofile'));
					} else {
						//todo 失败弹出层
					}
				});
			}.bind(this));


		});
	}

	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		return (
			<div>
				<Form onSubmit={this.handleSubmit.bind(this)} className="login-form">

				 <FormItem>
		          {getFieldDecorator('userName', {
		            rules: [{ required: true, message: 'Please input your username!' }],
		          })(
		            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
		          )}
				 </FormItem>
				 <FormItem>
		          {getFieldDecorator('password', {
		            rules: [{ required: true, message: 'Please input your Password!' }],
		          })(
		            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
		          )}
		        </FormItem>
		        <FormItem>
		          {getFieldDecorator('remember', {
		            valuePropName: 'checked',
		            initialValue: true,
		          })(
		            <Checkbox>Remember me</Checkbox>
		          )}
		          <a className="login-form-forgot" href="">Forgot password</a>
		          <Button type="primary" htmlType="submit" className="login-form-button">
		            Log in
		          </Button>
		          Or <a href="">register now!</a>
		        </FormItem>
		        <FormItem>
		        	<QRCode value={this.state.uuid} style={{height:this.state.qrcodeHeight}} />
		        </FormItem>
				</Form>
			</div>
		);
	}
}

export default Login = Form.create()(Login);