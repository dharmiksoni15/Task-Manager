function TaskInput({ task, setTask, isEditing, onAdd, onCancel }) {
  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Enter Task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onAdd()}
        className="flex-1 border p-2 rounded-md"
      />
      <button onClick={onAdd} className="bg-blue-600 text-white px-4 py-2 rounded-md">
        {isEditing ? "Update" : "Add"}
      </button>
      {isEditing && (
        <button onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded-md">
          Cancel
        </button>
      )}
    </div>
  );
}

export default TaskInput;