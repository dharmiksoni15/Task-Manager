import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchTasksApi = async () => {
  const res = await axios.get(`${API_URL}/api/tasks`);
  return res.data;
};

export const addTaskApi = async (title) => {
  const res = await axios.post(`${API_URL}/api/tasks`, { title });
  return res.data;
};

export const updateTaskApi = async (id, title, completed) => {
  const res = await axios.put(`${API_URL}/api/tasks/${id}`, { title, completed });
  return res.data;
};

export const deleteTaskApi = async (id) => {
  await axios.delete(`${API_URL}/api/tasks/${id}`);
};