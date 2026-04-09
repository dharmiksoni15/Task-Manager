import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { fetchTasksApi, addTaskApi, updateTaskApi, deleteTaskApi } from "./api/taskApi";
import TaskInput from "./components/TaskInput";
import SearchBar from "./components/SearchBar";
import FilterButtons from "./components/FilterButtons";
import TaskSummary from "./components/TaskSummary";
import TaskList from "./components/TaskList";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await fetchTasksApi();
        setTasks(data);
      } catch {
        toast.error("Failed to fetch tasks");
      }
    };
    loadTasks();
  }, []);

  const handleAddTask = async () => {
    if (!task.trim()) { toast.error("Task cannot be empty"); return; }
    try {
      if (isEditing) {
        const taskToEdit = tasks.find((t) => t._id === editTaskId);
        const updated = await updateTaskApi(editTaskId, task, taskToEdit.completed);
        setTasks((prev) => prev.map((t) => (t._id === editTaskId ? updated : t)));
        setIsEditing(false);
        setEditTaskId(null);
        toast.success("Task updated successfully");
      } else {
        const newTask = await addTaskApi(task);
        setTasks((prev) => [newTask, ...prev]);
        toast.success("Task added successfully");
      }
      setTask("");
    } catch {
      toast.error("Failed to save task");
    }
  };

  const handleToggleComplete = async (id, currentStatus, title) => {
    try {
      const updated = await updateTaskApi(id, title, !currentStatus);
      setTasks((prev) => prev.map((t) => (t._id === id ? updated : t)));
      toast.success(!currentStatus ? "Task marked as completed" : "Task marked as pending");
    } catch {
      toast.error("Failed to update task status");
    }
  };

  const handleDeleteTask = async (id) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    try {
      await deleteTaskApi(id);
      setTasks((prev) => prev.filter((t) => t._id !== id));
      toast.success("Task deleted successfully");
    } catch {
      toast.error("Failed to delete task");
    }
  };

  const handleEditTask = (taskItem) => {
    setTask(taskItem.title);
    setIsEditing(true);
    setEditTaskId(taskItem._id);
  };

  const handleCancelEdit = () => {
    setTask("");
    setIsEditing(false);
    setEditTaskId(null);
  };

  const filteredTasks = tasks
    .filter((t) => {
      if (filter === "completed") return t.completed === true;
      if (filter === "pending") return t.completed === false;
      return true;
    })
    .filter((t) => t.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-6">
        <h4 className="text-3xl font-bold text-center text-blue-600 mb-6">
          TaskFlow – a MERN Task Manager web app 🚀
        </h4>
        <TaskInput task={task} setTask={setTask} isEditing={isEditing} onAdd={handleAddTask} onCancel={handleCancelEdit} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterButtons filter={filter} setFilter={setFilter} />
        <TaskSummary total={tasks.length} completed={tasks.filter((t) => t.completed).length} pending={tasks.filter((t) => !t.completed).length} />
        <TaskList tasks={filteredTasks} onToggle={handleToggleComplete} onEdit={handleEditTask} onDelete={handleDeleteTask} />
      </div>
    </div>
  );
}

export default App;