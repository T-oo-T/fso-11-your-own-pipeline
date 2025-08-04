import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import axiosMock from 'axios'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'
import App from '../src/App'
import store from '../src/store'

// Added just minimal amount of tests to demonstrate CI/CD features, since this course isn't about testing
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