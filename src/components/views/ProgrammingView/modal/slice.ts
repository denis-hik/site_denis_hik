import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {TState} from "../../../../types";

import {ext as getAnalyticsExt} from "./../../../../modal/request/analitics"


export type TProgrammingSlice = {
    state: TState
    data: { name: string, url: string, logo: string }[]
}

const programmingInit: TProgrammingSlice  = {
    state: "idle",
    data: []
}

const programmingSlice = createSlice({
    name: 'programming',
    initialState: programmingInit,
    reducers: {
        clear: (state, action: PayloadAction<undefined>) => {
            state = {...programmingInit}
        },
    },
    extraReducers: builder => {
        getAnalyticsExt(builder)
    }
})

export default programmingSlice.reducer

export const {clear} = programmingSlice.caseReducers