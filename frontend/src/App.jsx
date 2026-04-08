import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);

  const API_URL = "http://localhost:5000/api/tasks";

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      toast.error("Failed to fetch tasks");
    }
  };

  // Add new task OR update existing task
  const handleAddTask = async () => {
    if (!task.trim()) {
      toast.error("Task cannot be empty");
      return;
    }

    try {
      if (isEditing) {
        const taskToEdit = tasks.find((t) => t._id === editTaskId);

        const res = await axios.put(`${API_URL}/${editTaskId}`, {
          title: task,
          completed: taskToEdit.completed,
        });

        setTasks((prevTasks) =>
          prevTasks.map((t) => (t._id === editTaskId ? res.data : t))
        );

        setTask("");
        setIsEditing(false);
        setEditTaskId(null);
        toast.success("Task updated successfully");
      } else {
        const res = await axios.post(API_URL, {
          title: task,
        });

        setTasks((prevTasks) => [res.data, ...prevTasks]);
        setTask("");
        toast.success("Task added successfully");
      }
    } catch (error) {
      console.error("Error saving task:", error);
      toast.error("Failed to save task");
    }
  };

  // Toggle complete task
  const handleToggleComplete = async (id, currentStatus, title) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, {
        title,
        completed: !currentStatus,
      });

      setTasks((prevTasks) =>
        prevTasks.map((t) => (t._id === id ? res.data : t))
      );

      toast.success(
        !currentStatus
          ? "Task marked as completed"
          : "Task marked as pending"
      );
    } catch (error) {
      console.error("Error updating task:", error);
      toast.error("Failed to update task status");
    }
  };

  // Delete Task
  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks((prevTasks) => prevTasks.filter((t) => t._id !== id));
      toast.success("Task deleted successfully");
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Failed to delete task");
    }
  };

  // Start editing
  const handleEditTask = (taskItem) => {
    setTask(taskItem.title);
    setIsEditing(true);
    setEditTaskId(taskItem._id);
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setTask("");
    setIsEditing(false);
    setEditTaskId(null);
  };

  // Filtered Tasks
  const filteredTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed === true;
    if (filter === "pending") return t.completed === false;
    return true;
  });

  // Search on filtered tasks
  const searchedTasks = filteredTasks.filter((t) =>
    t.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Task Manager
        </h1>

        {/* Input + Button */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter Task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 border p-2 rounded-md"
          />

          <button
            onClick={handleAddTask}
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            {isEditing ? "Update" : "Add"}
          </button>

          {isEditing && (
            <button
              onClick={handleCancelEdit}
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
          )}
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border p-2 rounded-md mb-4"
        />

        {/* Filter Buttons */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-md ${
              filter === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 rounded-md ${
              filter === "completed"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            Completed
          </button>

          <button
            onClick={() => setFilter("pending")}
            className={`px-4 py-2 rounded-md ${
              filter === "pending"
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            Pending
          </button>
        </div>

        {/* Task List */}
        <div>
          {searchedTasks.map((t) => (
            <div
              key={t._id}
              className="flex justify-between items-center border p-3 rounded mb-2 bg-gray-50"
            >
              <span
                className={`${
                  t.completed ? "line-through text-gray-400" : "text-gray-800"
                }`}
              >
                {t.title}
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    handleToggleComplete(t._id, t.completed, t.title)
                  }
                  className={`px-3 py-1 rounded text-white ${
                    t.completed ? "bg-yellow-500" : "bg-green-600"
                  }`}
                >
                  {t.completed ? "Undo" : "Complete"}
                </button>

                <button
                  onClick={() => handleEditTask(t)}
                  className="bg-yellow-600 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDeleteTask(t._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;