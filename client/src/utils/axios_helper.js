import axios from 'axios'

//export const axios_helper = axios.create({ baseURL: "https://catfact.ninja" })


export function GlobeTrotter(token) {
	const axios_helper = axios.create({baseURL: "http://127.0.0.1:8000/api/"})
	axios_helper.defaults.headers.common['Authorization'] = token && `Token ${token}`

	async function loginRegUser(userData, mode) {
		try {
			const { data } = await axios_helper.post(mode.toLowerCase() + '/', userData)
			return data
		} catch(e) {
			if('non_field_errors' in e.response.data)
				throw new Error(e.response.data.non_field_errors[0])
			else if('username' in e.response.data)
				throw new Error(e.response.data.username[0])
			else
				throw new Error('Sorry there was an issue')
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
	
	return { loginRegUser, logout, getSaved }
}
