import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../features/Login/slice';
import instructorReducer from "../features/Instructor/slice";

import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas'; // you'll create this file
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    auth: authReducer,
    instructor: instructorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
