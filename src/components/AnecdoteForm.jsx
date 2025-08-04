import { useDispatch } from 'react-redux'
import { createAnecdote } from "../reducers/anecdoteReducer"


const AnecdoteForm = () => {
  const dispatch = useDispatch()

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={async event => {
        event.preventDefault()
        const anecdoteContent = event.target.anecdote.value
        dispatch(createAnecdote(anecdoteContent))
        event.target.anecdote.value = ""
      }}>
        <div><input name="anecdote" /></div>
        <button>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm