import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Point } from 'react-native-google-places-autocomplete'

interface MarkPoint {
  location: Point
  description: string
}

interface Nav {
  origin: MarkPoint | null
  destination: MarkPoint | null
  travelTimeInformation: null
}

const initialState: Nav = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
}

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<MarkPoint | null>) => {
      state.origin = action.payload
    },
    setDestination: (state, action: PayloadAction<MarkPoint | null>) => {
      state.destination = action.payload
    },
    setTravelTimeInformation: (state, action) => {
      // setTravelTimeInformation: (state, action: PayloadAction<string>)=>{
      state.travelTimeInformation = action.payload
    },
  },
})

export const { reducer: navReducer, actions: navActions } = navSlice
