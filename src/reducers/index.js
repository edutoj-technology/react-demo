import { combineReducers } from "@reduxjs/toolkit";
import { taskReducer, taskCategoryReducer } from "./TaskReducer";

const reducers = combineReducers({
  tasks: taskReducer,
  taskCategories: taskCategoryReducer,
});

export default reducers;
