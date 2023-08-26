import { configureStore } from "@reduxjs/toolkit";
import { neymarkAPI } from "./API/neymark.api";
import { neymarkAuth } from "./API/neymark.auth";
// import { activeTicket } from "./wiretester/activeTicket";

export const store = configureStore({
    reducer: {
        [neymarkAPI.reducerPath]: neymarkAPI.reducer,
        [neymarkAuth.reducerPath]: neymarkAuth.reducer,
        // activeTicket: activeTicket.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(neymarkAPI.middleware).concat(neymarkAuth.middleware),
    devTools: false
});

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>