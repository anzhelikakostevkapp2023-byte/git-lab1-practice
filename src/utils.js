// src/utils.js
export function getDaysUntilDeadline(deadline) {
  const diffTime = new Date(deadline) - new Date();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays + 1; // Навмисна помилка: додаємо +1 день до результату
}
