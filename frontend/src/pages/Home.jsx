import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

import API from "../services/api";

import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import FilterBar from "../components/FilterBar";
import Loader from "../components/Loader";
import EmptyState from "../components/EmptyState";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import DeleteModal from "../components/DeleteModal";

import { sortByPriority } from "../utils/prioritySort";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("newest");

  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Fetch Tasks
  const fetchTasks = async () => {
    try {
      setLoading(true);

      const res = await API.get("/tasks", {
        params: {
          search,
          status,
          sort: sort === "priority" ? "newest" : sort,
        },
      });

      let data = res.data;

      if (sort === "priority") {
        data = sortByPriority(data);
      }

      setTasks(data);
    } catch {
      toast.error("Unable to fetch tasks.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [search, status, sort]);

  // Create / Update
  const handleSubmit = async (formData) => {
    try {
      if (editingTask) {
        await API.put(`/tasks/${editingTask._id}`, formData);

        toast.success("Task Updated");
      } else {
        await API.post("/tasks", formData);

        toast.success("Task Created");
      }

      setShowForm(false);
      setEditingTask(null);

      fetchTasks();
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  // Edit
  const handleEdit = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  // Add
  const handleAdd = () => {
    setEditingTask(null);
    setShowForm(true);
  };

  // Delete Modal
  const openDeleteModal = (id) => {
    setDeleteId(id);
    setDeleteModal(true);
  };

  // Delete
  const handleDelete = async () => {
    try {
      setDeleteLoading(true);

      await API.delete(`/tasks/${deleteId}`);

      toast.success("Task Deleted");

      setDeleteModal(false);

      fetchTasks();
    } catch {
      toast.error("Delete failed");
    } finally {
      setDeleteLoading(false);
    }
  };

  const stats = useMemo(
    () => ({
      total: tasks.length,
      pending: tasks.filter((t) => t.status === "Pending").length,
      completed: tasks.filter((t) => t.status === "Completed").length,
    }),
    [tasks],
  );

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-5 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div>
            <h1 className="text-4xl font-bold">Task Dashboard</h1>

            <p className="text-gray-500 mt-2">
              Organize your work efficiently.
            </p>
          </div>

          <button
            onClick={handleAdd}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
          >
            + New Task
          </button>
        </div>

        <div className="mt-8">
          <DashboardCards stats={stats} />
        </div>

        <div className="mt-8">
          <FilterBar
            search={search}
            setSearch={setSearch}
            status={status}
            setStatus={setStatus}
            sort={sort}
            setSort={setSort}
          />
        </div>

        <div className="mt-8">
          {loading ? (
            <Loader />
          ) : tasks.length === 0 ? (
            <EmptyState onAdd={handleAdd} />
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
              {tasks.map((task) => (
                <TaskCard
                  key={task._id}
                  task={task}
                  onEdit={handleEdit}
                  onDelete={openDeleteModal}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      <TaskForm
        isOpen={showForm}
        onClose={() => {
          setShowForm(false);
          setEditingTask(null);
        }}
        editingTask={editingTask}
        onSubmit={handleSubmit}
        loading={formLoading}
      />

      <DeleteModal
        isOpen={deleteModal}
        onClose={() => setDeleteModal(false)}
        onConfirm={handleDelete}
        loading={deleteLoading}
      />
    </>
  );
}

export default Home;
