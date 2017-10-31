	function toQueryString(obj) {
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


	export const list = (token, that) => {
		return function(dispatch) {
			fetch("http://127.0.0.1:3001/users", {
				method: 'POST',
				mode: 'cors',
				cache: 'default',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					'Authorization': 'Bearer ' + token
				},
				body: toQueryString({
					firstParam: 'yourValue',
					secondParam: 'yourOtherValue'
				})

			}).then(function(res) {
				res.json().then(res => {
					if (res.status) {
						dispatch({
							type: "list",
							payload: res.data
						})
					} else {
						if (res.msg == -1) {
							alert(-1);
							that.props.router.push('/login');
						}
					}
				});
			}.bind(this));
		}.bind(this)
	}


	export const init2 = (token, that) => {
		return function(dispatch) {
			fetch("http://127.0.0.1:3001/users", {
				method: 'POST',
				mode: 'cors',
				cache: 'default',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					'Authorization': 'Bearer ' + token
				},
				body: toQueryString({
					firstParam: 'yourValue',
					secondParam: 'yourOtherValue'
				})

			}).then(function(res) {
				res.json().then(res => {

					if (res.status) {

						dispatch({
							type: "init",
							payload: res.data
						})
					} else {
						if (res.msg == -1) {
							that.props.router.push('/login');
						}
					}
				});
			}.bind(this));
		}.bind(this)
	}