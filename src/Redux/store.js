import { configureStore, combineReducers, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import sideBar from './Reducer/SideBar'
import userSlice from "./Reducer/UserSlice";

const rootReducer = combineReducers({
  user: userSlice,
  sideBar
});

export const store = configureStore(
  {
    reducer: rootReducer,
    devTools: true,
    middleware: [thunk]
  },
  (window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()) ||
    compose
);
