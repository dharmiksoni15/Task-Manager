function TaskSummary({ total, completed, pending }) {
  return (
    <div className="grid grid-cols-3 gap-3 mb-4 text-center">
      <div className="bg-blue-100 text-blue-700 p-3 rounded-md font-semibold">
        Total: {total}
      </div>
      <div className="bg-green-100 text-green-700 p-3 rounded-md font-semibold">
        Completed: {completed}
      </div>
      <div className="bg-yellow-100 text-yellow-700 p-3 rounded-md font-semibold">
        Pending: {pending}
      </div>
    </div>
  );
}

export default TaskSummary;