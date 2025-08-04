import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import axiosMock from 'axios'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'
import App from '../src/App'
import store from '../src/store'

/*
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'


ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
<App />
</Provider>
)
*/

jest.mock('axios')
describe('<App />', () => {
  it('fetches data', async () => {
    axiosMock.get.mockResolvedValueOnce({anecdotes: []})
    await act(async () => {
      render(<Provider store={store}><App /></Provider>)
    })
    expect(axiosMock.get).toHaveBeenCalledTimes(1)
    expect(axiosMock.get).toHaveBeenCalledWith('/anecdotes')
  })
})