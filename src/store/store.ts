import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import testimonialsReducer from './testimonialsSlice'
import portfolioReducer from './portfolioSlice'


export const store = configureStore({
    reducer: {
        testimonials: testimonialsReducer,
        portfolio: portfolioReducer
    },
    middleware: getDefaultMiddleware(),
    // do not forget this
    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
