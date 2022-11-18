import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
    name: string,
    age: number,
}

const initialState: UserState = {
    name: 'No Name',
    age: 20,
}

export const { actions, reducer } = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setAge: (state, action: PayloadAction<number>) => {
            state.age = action.payload
        },
    },
})