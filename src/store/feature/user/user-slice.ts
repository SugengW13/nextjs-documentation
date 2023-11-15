import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosInstance from "@/libs/axios";

interface UserState {
  items: User[]
  isLoading: boolean
}

const initialState: UserState = {
  items: [],
  isLoading: false
}

export const getItems = createAsyncThunk('user/getItems', async () => {
  return await axiosInstance.get('/users')
    .then((response: any) => {
      return response.data
    })
    .catch((error: any) => {
      throw error
    })
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getItems.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getItems.fulfilled, (state, action) => {
        state.items = action.payload
        state.isLoading = false
      })
      .addCase(getItems.rejected, (state) => {
        state.isLoading = false
      })
  }
})

export const {} = userSlice.actions
export default userSlice.reducer
