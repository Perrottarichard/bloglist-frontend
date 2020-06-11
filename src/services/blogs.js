import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null
const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = (blog, newObject) => {
  const response = axios.put(`${baseUrl}/${blog.id}`, newObject)
  return response.data
}

const remove = blog => {
  const config = {
    headers: { Authorization: token },
  }
  console.log(blog.id)
  const response = axios.delete(`${baseUrl}/${blog.id}`, config)
  return response.data
}

const voteUp = async (toUpdate) => {
  const id = toUpdate.id
  const votedObj = { ...toUpdate, votes: toUpdate.votes + 1 }
  const response = await axios.put(`${baseUrl}/${id}`, votedObj)
  return response.data
}

export default { getAll, create, update, setToken, remove, voteUp }