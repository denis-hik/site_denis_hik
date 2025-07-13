import {configureStore} from "@reduxjs/toolkit";
import programmingSlice from "./components/views/ProgrammingView/modal/slice";
import settingsSlice from "./modal/context/reducer/settingsSlice";

export const store = configureStore({
    reducer: {
        programming: programmingSlice,
        settings: settingsSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

// axios.interceptors.request.use(
//     async config => {
//         const hash = store.getState()?.current?.user?.hash
//         if(hash === undefined)
//             return config
//         config.headers['Authorization'] = `${hash}`
//         return config;
//     }
// );
// axios.defaults.jar = new CookieJar();
// axios.defaults.withCredentials = true

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const dispatch = store.dispatch