var initialState = [];

function taskReducer(state = initialState, action) {
  switch (action.type) {
    // case "ADD_TASK": {
    //   return { ...state, count: state.count + 1 };
    // }
    case "GET_ALL_TASKS": {
      return action.response;
    }
    default:
      return state;
  }
}

function taskCategoryReducer(state = [], action) {
  switch (action.type) {
    case "GET_ALL_TASK_CATEGORIES": {
      return action.response;
    }
    default:
      return state;
  }
}
export { taskReducer, taskCategoryReducer };
