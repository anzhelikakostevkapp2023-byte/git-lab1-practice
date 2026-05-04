export function getDaysUntilDeadline(deadline) {
  const diffTime = new Date(deadline) - new Date();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  throw new Error("UTILS IS CALLED");
}
