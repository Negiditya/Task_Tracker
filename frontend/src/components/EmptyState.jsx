import { FaClipboardList } from "react-icons/fa";

function EmptyState({ onAdd }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-12 text-center">
      <div className="w-24 h-24 rounded-full bg-blue-100 mx-auto flex items-center justify-center">
        <FaClipboardList className="text-blue-600" size={40} />
      </div>

      <h2 className="mt-6 text-2xl font-bold">No Tasks Yet</h2>

      <p className="text-gray-500 mt-3">
        Create your first task and start organizing your work.
      </p>

      <button
        onClick={onAdd}
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-semibold transition"
      >
        + Create First Task
      </button>
    </div>
  );
}

export default EmptyState;
