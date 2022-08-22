import { configureStore } from '@reduxjs/toolkit';
import {setupListeners} from "@reduxjs/toolkit/query";
import {userApi} from "../services/UserAPI";
import {contactsApi} from "../services/ContactsAPI";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
      userApi.middleware,
      contactsApi.middleware
  ),
});

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
