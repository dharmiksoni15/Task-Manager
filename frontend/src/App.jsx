import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const API_URL = "http://localhost:5000/api/tasks";

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Add new task
  const handleAddTask = async () => {
    if (!task.trim()) return;

    try {
      const res = await axios.post(API_URL, {
        title: task,
      });

      setTasks([res.data, ...tasks]);
      setTask("");
    } catch (error) {
      console.error("Error adding task:", error);
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
        prevTasks.map((t) => (t._id === id ? res.data : t)),
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Delete Task
  const handleDeleteTask = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);

    setTasks((prevTasks) => prevTasks.filter((t) => t._id !== id));
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};
  
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
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
            Add
          </button>
        </div>

        {/* Task List */}
        <div>
          {tasks.map((t) => (
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
                onClick={() => handleDeleteTask(t._id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
