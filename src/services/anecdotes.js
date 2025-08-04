import axios from 'axios'

const baseUrl = '/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (newAnecdote) => {
  const response = await axios.post(baseUrl, { content: newAnecdote, votes: 0 })
  return response.data
}

const update = async (id, anecdote) => {
  const response = await axios.put(`${baseUrl}/${id}`, anecdote)
  return response.data
}

export default { getAll, createNew, update }