import axios from 'axios'

//export const axios_helper = axios.create({ baseURL: "https://catfact.ninja" })


export function GlobeTrotter(token) {
	const axios_helper = axios.create({ baseURL: "https://catfact.ninja" })
	axios_helper.defaults.headers.common['Authorization'] = `Bearer ${token}`

	async function loginRegUser(userData, mode) {
		try {
			console.log(mode)
			const data = { user: userData.email }
			return data
		} catch(e) {
		}
	}

	async function getSaved(userId) {
		try {
			return { userId, token }
		} catch(e) {
		}
	}
	
	return { loginRegUser, getSaved }
}