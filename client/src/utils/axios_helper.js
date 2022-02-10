import axios from 'axios'
/* istanbul ignore file */


export function GlobeTrotter(token) {
	const axios_helper = axios.create({baseURL: "https://globe--trotter.herokuapp.com/"})
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

	async function getHistory() {
		try {
			const res = await axios_helper.get('api/')
			return res.data
		} catch(e) {
			console.log(e.response.data)
			throw new Error(`Sorry there was an issue, please insure you're logged in`)
		}
	}

	async function save(data) {
		try {
			const res = await axios_helper.post('api/', data)
			return (res.data)
		} catch(e) {
			throw new Error('Sorry there was an issue while saving')
		}
	}

	async function deleteRecord(recordId) {
		try {
			const res = await axios_helper.delete('api/', { data: { id: recordId } })
		} catch(e) {
			throw new Error('Sorry there was an issue, could not delete')
		}
	}
	
	return { loginRegUser, logout, getHistory, save, deleteRecord }
}