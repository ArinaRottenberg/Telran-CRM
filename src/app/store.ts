import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import token from '../features/slices/tokenSlice';
import user from '../features/slices/tokenSlice';


export const store = configureStore({
  reducer: {
    token, user
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
