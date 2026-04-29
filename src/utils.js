export function getDaysUntilDeadline(deadlineDate) {
  const today = new Date();
  const deadline = new Date(deadlineDate);

  // Обнуляємо час для точного розрахунку днів
  today.setHours(0, 0, 0, 0);
  deadline.setHours(0, 0, 0, 0);

  const diffTime = deadline - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}
