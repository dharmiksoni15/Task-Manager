import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const API_URL = "http://localhost:5000/api/tasks";

  // fetch all tasks

  const fetchTasks = async () => {
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks", error);
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
      console.error("Error Adding Task:", error);
    }
  };

  useEffect(()=>{
    fetchTasks();
  },[]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Task Manager
        </h1>

        {/* Input + button */}

        <div className="flex gap-4 mb-4 ">
          <input
            type="text"
            placeholder="Enter Task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex border p-2 rounded md"
          />

          <button
            onClick={handleAddTask}
            className="bg-blue-600 text-white px-4 py-2 rounded-md "
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <div>
          {tasks.map((t) => (
            <div key={t._id} className="border p-2 rounded mb-2 bg-gray-50">
              <span>{t.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
