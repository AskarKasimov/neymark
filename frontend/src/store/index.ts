import { configureStore } from "@reduxjs/toolkit";
import { neymarkAPI } from "./API/neymark.api";
// import { activeTicket } from "./wiretester/activeTicket";

export const store = configureStore({
    reducer: {
        [neymarkAPI.reducerPath]: neymarkAPI.reducer,
        // activeTicket: activeTicket.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(neymarkAPI.middleware),
    devTools: false
});

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>