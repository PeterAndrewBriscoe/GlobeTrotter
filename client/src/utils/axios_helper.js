import axios from 'axios'

//export const axios_helper = axios.create({ baseURL: "https://catfact.ninja" })


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

	async function getSaved() {
		try {
			const res = await axios_helper.get('api/')
			return res.data
		} catch(e) {
		}
	}

	async function save(data) {
		try {
			const res = await axios_helper.post('api/', data)
			return (res.data)
		} catch(e) {
		}
	}

	async function deleteRecord(recordId) {
		try {
			console.log(recordId)
			const res = await axios_helper.delete('api/', { id: recordId })
			return (res)
		} catch(e) {
		}
	}
	
	return { loginRegUser, logout, getSaved, save, deleteRecord }
}

export function Triposo() {
	const apiToken = "3f71d5kylylwplhj7wu5ikwa4yds3dlj"
	const accountId = "IG3CBP2Q"
	//const axios_helper = //axios.create({baseURL: "https://triposo.com/api/20220104/"})//${lopj}"})

	async function getLocation(location) {
		try {
			console.log('fetch')
			const res = await axios.get(`https://www.triposo.com/api/20220104/location.json?id=${location}&account=IG3CBP2Q&token=3f71d5kylylwplhj7wu5ikwa4yds3dlj`)//await axios_helper.get(`location.json?id=${location}&account=${accountId}&token=${apiToken}`)
			console.log('data:' + res.data)
			return res.data
		} catch(e) {
			console.log(e.message)
		}
	}

	return getLocation
}