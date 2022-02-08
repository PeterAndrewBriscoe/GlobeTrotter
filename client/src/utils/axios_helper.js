import axios from 'axios'

//export const axios_helper = axios.create({ baseURL: "https://catfact.ninja" })


export function GlobeTrotter(token) {
	const axios_helper = axios.create({baseURL: "http://127.0.0.1:8000/"})
	axios_helper.defaults.headers.common['Authorization'] = token && `Token ${token}`

	async function loginRegUser(userData, mode) {
		try {
			const res = await axios_helper.post(mode.toLowerCase() + '/', userData)
			return res.data
		} catch(e) {
			let message = 'Sorry there was an issue'
			if(e.response) {
				message += ': '
				if(e.response.data.non_field_errors)
					message += e.response.data.non_field_errors[0]
				else if(e.response.data.username)
					message += e.response.data.username[0]
			}
			throw new Error(message)
		}
	}

	async function logout() {
		try {
			await axios_helper.post('logout/')
		} catch(e) {
		}
	}

	async function getSaved(username) {
		try {
			return { username, places: [{name: 'london', long: 32, lat: 34 }, {name: 'rome', long: 32, lat: 34 }, {name: 'berlin', long: 32, lat: 34 }] }
		} catch(e) {
		}
	}

	async function save(data, mode) {
		try {
			//const res = await axios_helper.post('/api', userData)
			return ({saveData: data, mode})
		} catch(e) {
		}
	}
	
	return { loginRegUser, logout, getSaved, save }
}
