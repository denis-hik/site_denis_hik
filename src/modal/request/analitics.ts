import {ActionReducerMapBuilder, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {TProgrammingSlice} from "../../components/views/ProgrammingView/modal/slice";
import env from "../../env";

type TResponse = {
    status: string,
    scrollTop: number
    result: { status: "Ok" | "Reg", resume?:TProgrammingSlice["data"] }
}

export const getAnalytics = createAsyncThunk(
    "getAnalytics",
    async (
        payload: void,
        { dispatch, fulfillWithValue, rejectWithValue }
    ): Promise<TResponse> => {
        try {
            const response = await axios.get<TResponse>(`${env.baseEndpoint}analytics`)
            return fulfillWithValue(response.data)
        } catch (err) {
            throw rejectWithValue(err)
        }
    }
);

export const ext = (builder: ActionReducerMapBuilder<TProgrammingSlice>) => {
    return builder
        .addCase(getAnalytics.pending, (state, action) => {
            state.state = "loading"
        })
        .addCase(getAnalytics.fulfilled, (state, action) => {
            state.state = "success"
            state.data = action.payload.result?.resume || []
        })
        .addCase(getAnalytics.rejected, (state, action) => {
            state.state = "failed"
        })
}