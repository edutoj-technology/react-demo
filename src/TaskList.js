import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as TaskActions from "./actions/Taskactions";
import AddTask from "./AddTask";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.tasks);

  useEffect(() => {
    dispatch(TaskActions.getAllTasks("https://localhost:7278/api/Tasks"));
  }, []);

  return (
    <section className="task-list">
      <section className="form">
        <AddTask />

        <br />

        {tasks && tasks.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Task Category</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => {
                return (
                  <tr key={task.taskId}>
                    <td>{task.taskName}</td>
                    <td>{task.category.categoryName}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </section>
    </section>
  );
};

export default TaskList;
