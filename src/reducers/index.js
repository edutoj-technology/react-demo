import { combineReducers } from "@reduxjs/toolkit";
import taskReducer from "./TaskReducer";

const reducers = combineReducers({
  tasks: taskReducer,
});

export default reducers;
