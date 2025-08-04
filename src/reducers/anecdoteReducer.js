import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdotes"
import { setNotification } from '../reducers/notificationReducer'

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    addAnecdote(state, action) {
      return [...state, action.payload]
    },
    setAnecdotes(_state, action) {
      return action.payload
    }
  }
})

const { setAnecdotes, addAnecdote } = anecdoteSlice.actions
export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(addAnecdote(newAnecdote))
    dispatch(setNotification(`created new anecdote '${content}'`, 10))
  }
}

export const addVote = anecdote => {
  return async (dispatch, getState) => {
    const updatedAnecdote = await anecdoteService.update(anecdote.id, { 
      content: anecdote.content, 
      votes: anecdote.votes + 1 
    })

    const { anecdotes } = getState()

    dispatch(setAnecdotes(anecdotes.map(a => {
      if (a.id === anecdote.id) {
        return updatedAnecdote
      } else {
        return a
      }
    })))

    dispatch(setNotification(`you voted '${anecdote.content}'`, 10))
  }
}

export const { vote } = anecdoteSlice.actions
export default anecdoteSlice.reducer