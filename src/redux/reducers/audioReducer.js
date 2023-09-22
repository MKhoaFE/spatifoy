import { createSlice } from '@reduxjs/toolkit'

const audioSlice = createSlice({
  name: 'addAudio',
  initialState: {
    audio: {},
  },
  reducers: {
    addAudio: (state, action) =>
    {
      state.audio = action.payload
    },
  },
})

export const audioReducer = audioSlice.reducer
export const { addAudio } = audioSlice.actions
//selector
export const audioSelector = (state) => state.audioReducer.audio
