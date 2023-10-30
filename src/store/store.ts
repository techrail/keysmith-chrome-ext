import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '../features/homeSlice';
import themeReducer from '../features/themeSlice';

export const store = configureStore({
  reducer: {
    contactReducer,
    themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
