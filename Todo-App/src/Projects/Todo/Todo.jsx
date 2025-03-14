import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";
import { getDataLocalStorage, setDataLocalStorage } from "../../Local";

const Todo = () => {
  const [tasks, setTasks] = useState(getDataLocalStorage());
  const [inputValue, setInputValue] = useState({});

  // handle input value functions
  const handleInputValue = (value) => {
    const taskValue = {
      id: value,
      todoTask: value,
      completed: false,
    };
    setInputValue(taskValue);
  };

  //handle Form Submission function
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue?.todoTask) {
      toast.error("Task cannot be empty!");
      return;
    }
    if (inputValue?.todoTask) {
      const taskValue = tasks.find(
        (task) => task?.todoTask === inputValue?.todoTask
      );
      if (taskValue) {
        toast.error("Task already exists!");
        setInputValue({
          id: "",
          todoTask: "",
          completed: false,
        });
        return;
      }
    }
    if (inputValue) {
      setTasks([...tasks, inputValue]);
      setInputValue({
        id: "",
        todoTask: "",
        completed: false,
      });
      toast.success("Task added successfully!");
    }
  };

  //Handle Delete functions
  const handleDelete = (deleteData) => {
    const deleteValue = tasks?.filter((data) => data?.todoTask !== deleteData);
    setTasks(deleteValue);
  };

  const handleClearAll = () => {
    setTasks([]);
    toast.success("All tasks cleared successfully!");
  };

  //Store data to the Local Storage
  setDataLocalStorage(tasks);
  // console.log(tasks);
  return (
    <div className="py-20 max-w-96 mx-auto">
      <h2 className="text-center text-2xl font-semibold">Welcome Todo App</h2>
      <div>
        <form onSubmit={handleFormSubmit} className="text-center mt-4">
          <input
            type="text"
            placeholder="Add a new task"
            value={inputValue?.todoTask}
            autoComplete="off"
            onChange={(event) => handleInputValue(event.target.value)}
            className="border-2 border-[#1E293B] rounded-l-md  py-1 px-2 bg-gray-50 focus:rounded-l-md"
          />
          <button
            className="bg-[#1E293B] text-gray-100 py-[6px] px-3 rounded-r-md font-medium"
            type="submit"
          >
            Add Task
          </button>
        </form>
      </div>
      <div>
        {tasks?.length === 0 && (
          <p className="text-center text-xl text-gray-800 font-medium mt-4">
            No tasks added yet.
          </p>
        )}
        <div className="flex flex-col gap-3 mt-4">
          {tasks?.map((task) => (
            <div
              className="bg-gray-100 p-4 rounded-lg shadow flex justify-between items-center"
              key={task.id}
            >
              <p
                className={`font-medium ${
                  task.completed ? "line-through" : ""
                }`}
              >
                {task?.todoTask}
              </p>
              <div className="flex items-center gap-2">
                <button
                  className="cursor-pointer"
                  onClick={() => handleDelete(`${task.todoTask}`)}
                >
                  <MdDeleteForever className="text-red-400 text-xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-4">
        <button
          onClick={handleClearAll}
          className="bg-red-500 px-3 py-1 text-gray-100 font-medium rounded-lg"
        >
          Clear All
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default Todo;
