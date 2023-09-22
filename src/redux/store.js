import { configureStore } from "@reduxjs/toolkit"
import { audioReducer } from "./reducers/audioReducer"

const store = configureStore({
  reducer: {
    audioReducer
  }
})

export default store