import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "./common/Dropdown";
import Textbox from "./common/Textbox";

import {
  getAllTaskCategories,
  addTask,
  getAllTasks,
} from "./actions/Taskactions";

const AddTask = () => {
  const dispatch = useDispatch();
  const taskCategories = useSelector((store) => store.taskCategories);

  const [options, setOptions] = useState([]);

  const [title, setTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCategoryName, setSelectedCategoryName] = useState("");

  useEffect(() => {
    dispatch(getAllTaskCategories("https://localhost:7278/api/TaskCategories"));
  }, []);

  useEffect(() => {
    if (taskCategories?.length > 0) {
      const filteredOptions = [{ label: "Select Category", value: "" }];
      taskCategories.forEach((element) => {
        filteredOptions.push({
          label: element.categoryName,
          value: element.taskCategoryId,
        });
      });
      setOptions(filteredOptions);
    }
  }, [taskCategories]);

  const onAddTask = () => {
    var taskObject = {
      createdBy: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      createDate: "2023-03-25T04:36:19.206Z",
      isDeleted: false,
      taskName: title,
      category: {
        createdBy: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        createDate: "2023-03-25T04:36:19.206Z",
        isDeleted: false,
        taskCategoryId: selectedCategory,
        categoryName: selectedCategoryName,
      },
    };

    dispatch(addTask("https://localhost:7278/api/Tasks", taskObject)).then(
      () => {
        dispatch(getAllTasks("https://localhost:7278/api/Tasks"));
      }
    );
  };

  const onCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedCategoryName(
      event.target.options[event.target.options.selectedIndex].label
    );
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

        <Dropdown
          label={"Task Category"}
          options={options}
          selectedValue={selectedCategory}
          onChange={onCategoryChange}
        />

        <button onClick={onAddTask}>Assign Task</button>
      </section>
    </section>
  );
};

export default AddTask;
