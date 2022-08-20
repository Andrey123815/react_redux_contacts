import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import {userApi} from "../components/LoginForm/LoginFormAPI";
import {setupListeners} from "@reduxjs/toolkit/query";
import {userApi} from "../services/user";
// import {userApi} from "../components/LoginForm/LoginFormAPI";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(userApi.middleware),
});

// setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
