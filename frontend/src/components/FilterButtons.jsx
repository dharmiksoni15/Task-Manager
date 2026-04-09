function FilterButtons({ filter, setFilter }) {
  const buttons = [
    { label: "All", value: "all", active: "bg-blue-600" },
    { label: "Completed", value: "completed", active: "bg-green-600" },
    { label: "Pending", value: "pending", active: "bg-yellow-500" },
  ];

  return (
    <div className="flex gap-2 mb-4">
      {buttons.map((btn) => (
        <button
          key={btn.value}
          onClick={() => setFilter(btn.value)}
          className={`px-4 py-2 rounded-md text-white ${
            filter === btn.value ? btn.active : "bg-gray-200 text-black"
          }`}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;