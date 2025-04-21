import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../features/Login/slice';
import instructorReducer from "../features/Instructor/slice";
import  courseReducer from "../features/Course/slice";
import  lectureReducer from "../features/Lecture/slice";
import  dashboardReducer from "../features/Home/slice";
import  lecturelistReducer from '../features/LectureList/slice'


import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas'; // you'll create this file
import LectureList from '../features/LectureList';
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    auth: authReducer,
    instructor: instructorReducer,
    course: courseReducer,
    lecture:lectureReducer,
    dashboard:dashboardReducer,
    lecturelist: lecturelistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
