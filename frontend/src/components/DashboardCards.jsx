import { FaClipboardList, FaCheckCircle, FaClock } from "react-icons/fa";

function DashboardCards({ stats }) {
  const cards = [
    {
      title: "Total Tasks",
      value: stats.total,
      color: "text-blue-600",
      bg: "bg-blue-100",
      icon: <FaClipboardList size={24} />,
    },
    {
      title: "Pending",
      value: stats.pending,
      color: "text-yellow-600",
      bg: "bg-yellow-100",
      icon: <FaClock size={24} />,
    },
    {
      title: "Completed",
      value: stats.completed,
      color: "text-green-600",
      bg: "bg-green-100",
      icon: <FaCheckCircle size={24} />,
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">{card.title}</p>

              <h2 className={`mt-2 text-4xl font-bold ${card.color}`}>
                {card.value}
              </h2>
            </div>

            <div className={`rounded-xl p-4 ${card.bg} ${card.color}`}>
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;
