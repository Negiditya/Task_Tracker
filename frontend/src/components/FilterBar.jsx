import { FaSearch } from "react-icons/fa";

function FilterBar({ search, setSearch, status, setStatus, sort, setSort }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-5 flex flex-col lg:flex-row gap-4">
      {/* Search */}

      <div className="relative flex-1">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Status */}

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="All">All Status</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>

      {/* Sort */}

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
}

export default FilterBar;
