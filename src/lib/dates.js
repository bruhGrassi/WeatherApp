export const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/**
 * Returns the day of the week or "Tomorrow" if the day is the next day.
 * @param {number} dayIndex - Index of the day.
 * @returns {string} - Day of the week or "Tomorrow".
 */
export const getDayOfWeek = (dayIndex) => {
  const today = new Date().getDay();
  const tomorrow = (today + 1) % 7;
  return dayIndex === tomorrow ? "Tomorrow" : DAYS_OF_WEEK[dayIndex];
};
