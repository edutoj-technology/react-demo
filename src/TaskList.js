import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllTasks from "./actions/Taskactions";
import Textbox from "./common/Textbox";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.tasks);

  const [title, setTitle] = useState("");

  const onAddTask = () => {
    
  };

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

        {tasks &&
          tasks.length > 0 &&
          tasks.map((task) => {
            return <section key={task.taskId}> {task.taskName}</section>;
          })}
      </section>
    </section>
  );
};

export default TaskList;
