import express from 'express'
import anecdotesData from './db.js'
const app = express()

let { anecdotes } = anecdotesData

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.static('dist'))

app.get('/version', (_req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})

app.get('/health', (_req, res) => {
  res.send('ok')
})

app.get('/anecdotes', (_req, res) => {
  res.json( anecdotes )
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
