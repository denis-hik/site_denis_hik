import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ISettingsSliceState {
    lang:"ru" | "en",
}

export const settingsSliceInitialState:ISettingsSliceState = {
    lang:"en",
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState: settingsSliceInitialState,
    reducers: {
        clear: () => ({...settingsSliceInitialState}),
        changeLang: (state, action: PayloadAction<ISettingsSliceState["lang"]>) => {
            state.lang = action.payload
        }
    }
})

export const {clear,changeLang} = settingsSlice.actions
export default settingsSlice.reducer
