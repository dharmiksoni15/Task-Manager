function TaskItem({ task, onToggle, onEdit, onDelete }) {
  return (
    <div className="flex justify-between items-center border p-3 rounded mb-2 bg-gray-50">
      <span className={task.completed ? "line-through text-gray-400" : "text-gray-800"}>
        {task.title}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => onToggle(task._id, task.completed, task.title)}
          className={`px-3 py-1 rounded text-white ${task.completed ? "bg-yellow-500" : "bg-green-600"}`}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => onEdit(task)} className="bg-yellow-600 text-white px-3 py-1 rounded">
          Edit
        </button>
        <button onClick={() => onDelete(task._id)} className="bg-red-600 text-white px-3 py-1 rounded">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;