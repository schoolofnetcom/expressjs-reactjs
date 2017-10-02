import axios from 'axios'

const URL = 'http://localhost:9000'

const findAll = () => {
	const url = `${URL}/bill`

	return axios.get(url).then(response => response.data)
}

const deleteById = (id) => {
	const url = `${URL}/bill/${id}`

	return axios.delete(url).then(response => response.data)
}

const create = (name, value, type, category) => {
	const url = `${URL}/bill`

	return axios.post(url, { name, value, type, category }).then(response => response.data)
}

export {
	findAll,
	deleteById,
	create
}