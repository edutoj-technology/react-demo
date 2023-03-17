const addTask = (task) => {
  return {
    type: "ADD_TASK",
    payload: task,
  };
};

const getAllTasks = (url, data) => {
  return {
    type: "GET_ALL_TASKS",
    resolve: true,
    meta: {
      api: {
        method: "GET",
        url: url,
        data: data
      },
    },
  };
};

export default getAllTasks;
