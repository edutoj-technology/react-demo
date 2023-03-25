const addTask = (url, taskObject) => {
  return {
    type: "ADD_TASK",
    meta: {
      api: {
        method: "POST",
        url: url,
        data: taskObject,
      },
    },
  };
};

const getAllTasks = (url) => {
  return {
    type: "GET_ALL_TASKS",
    meta: {
      api: {
        method: "GET",
        url: url,
      },
    },
  };
};

const getAllTaskCategories = (url) => {
  return {
    type: "GET_ALL_TASK_CATEGORIES",
    meta: {
      api: {
        method: "GET",
        url: url,
      },
    },
  };
};

export { addTask, getAllTasks, getAllTaskCategories };
