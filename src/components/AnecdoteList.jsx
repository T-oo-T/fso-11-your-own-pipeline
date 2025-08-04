import { useSelector, useDispatch } from 'react-redux'
import { addVote } from "../reducers/anecdoteReducer"


const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    console.log('state', state)
    return state.anecdotes
      .filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
      .sort((a, b) => b.votes - a.votes)
    })
  const dispatch = useDispatch()


  return (
    <>
    {anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button 
            onClick={() => {
              dispatch(addVote(anecdote))
            }}>
              vote
          </button>
        </div>
      </div>
    )}
    </>
  )
}

export default AnecdoteList