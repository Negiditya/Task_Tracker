export const formatDate = (date) => {
  if (!date) return "No Due Date";

  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
