import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllTasks from "./actions/Taskactions";
import Textbox from "./common/Textbox";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.tasks);

  const [title, setTitle] = useState("");

  useEffect(() => {
    dispatch(getAllTasks("https://localhost:7278/Tasks"));
  }, []);

  const onAddTask = () => {};

  return (
    <section className="task-list">
      <section className="form">
        <Textbox
          label={"Task title"}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        
        <button onClick={onAddTask}>Assign Task</button>

        {tasks && tasks.length > 0 && (
          <table>
            <tr>
              <th>Task Name</th>
              <th>Task Category</th>
            </tr>
            {tasks.map((task) => {
              return (
                <tr key={task.taskId}>
                  <td>{task.taskName}</td>
                  <td>{task.category.categoryName}</td>
                </tr>
              );
            })}
          </table>
        )}
      </section>
    </section>
  );
};

export default TaskList;
