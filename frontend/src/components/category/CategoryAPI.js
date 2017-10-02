import axios from 'axios'

const URL = 'http://localhost:9000'

const findAll = () => {
	const url = `${URL}/category`

	return axios.get(url).then(response => response.data)
}

const deleteById = (id) => {
	const url = `${URL}/category/${id}`

	return axios.delete(url).then(response => response.data)
}

const create = (name) => {
	const url = `${URL}/category`

	return axios.post(url, { name }).then(response => response.data)
}

export {
	findAll,
	deleteById,
	create
}