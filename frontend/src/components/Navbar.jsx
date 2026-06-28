import { FaClipboardList } from "react-icons/fa";

function Navbar() {
  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-xl text-white">
            <FaClipboardList size={20} />
          </div>

          <div>
            <h1 className="font-bold text-xl">Task Tracker</h1>
            <p className="text-xs text-gray-500">MERN Stack Assignment</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
