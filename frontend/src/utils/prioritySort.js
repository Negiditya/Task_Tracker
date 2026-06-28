export const priorityOrder = {
  High: 3,
  Medium: 2,
  Low: 1,
};

export const sortByPriority = (tasks) => {
  return [...tasks].sort(
    (a, b) => priorityOrder[b.priority] - priorityOrder[a.priority],
  );
};
