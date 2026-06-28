import {
  FaCalendarAlt,
  FaEdit,
  FaTrash,
  FaExclamationTriangle,
} from "react-icons/fa";

import { formatDate } from "../utils/formatDate";
import { priorityStyles, statusStyles } from "../utils/badgeStyles";

function TaskCard({ task, onEdit, onDelete }) {
  const overdue =
    task.dueDate &&
    new Date(task.dueDate) < new Date() &&
    task.status !== "Completed";

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between">
        <h2 className="text-xl font-bold">{task.title}</h2>

        {overdue && (
          <FaExclamationTriangle className="text-red-500" title="Overdue" />
        )}
      </div>

      <p className="mt-3 text-gray-500 line-clamp-3">{task.description}</p>

      <div className="mt-5 flex flex-wrap gap-3">
        <span
          className={`rounded-full border px-3 py-1 text-sm font-semibold ${priorityStyles[task.priority].bg} ${priorityStyles[task.priority].text} ${priorityStyles[task.priority].border}`}
        >
          {priorityStyles[task.priority].icon} {task.priority}
        </span>

        <span
          className={`rounded-full border px-3 py-1 text-sm font-semibold ${statusStyles[task.status].bg} ${statusStyles[task.status].text} ${statusStyles[task.status].border}`}
        >
          {statusStyles[task.status].icon} {task.status}
        </span>
      </div>

      <div className="mt-5 flex items-center gap-2 text-gray-500">
        <FaCalendarAlt />

        {formatDate(task.dueDate)}
      </div>

      <div className="mt-7 flex justify-between">
        <button
          onClick={() => onEdit(task)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          <FaEdit />
        </button>

        <button
          onClick={() => onDelete(task._id)}
          className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
