import { createSlice } from "@reduxjs/toolkit"


const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    setNotificationState(_state, action) {
      return action.payload
    },
    clearNotification() {
      return null
    }
  }
})

const { setNotificationState, clearNotification } = notificationSlice.actions

let timeout
export const setNotification = (notification, timeInSeconds) => {
  return async dispatch => {
    dispatch(setNotificationState(notification))
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      dispatch(clearNotification())
    }, timeInSeconds * 1000)
  }
}

export default notificationSlice.reducer
