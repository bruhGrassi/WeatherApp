/**
 * Processes the forecast data to get daily temperature.
 * @param {Array} forecast - Forecast data.
 * @returns {Array} - Daily temperature data excluding today's date.
 */
export const getDailyTemperature = (forecast) => {
  const dailyTemperatures = forecast.reduce((acc, item) => {
    const dateStr = item.date.toDateString();
    if (!acc[dateStr]) {
      acc[dateStr] = {
        date: item.dayOfWeek,
        temp_min: item.temp_min,
        temp_max: item.temp_max,
        image: item.image,
      };
    } else {
      acc[dateStr].temp_min = Math.min(acc[dateStr].temp_min, item.temp_min);
      if (item.temp_max > acc[dateStr].temp_max) {
        acc[dateStr].temp_max = item.temp_max;
        acc[dateStr].image = item.image;
      }
    }
    return acc;
  }, {});

  const today = new Date().toLocaleString("en-us", { weekday: "long" });
  return Object.values(dailyTemperatures).filter((item) => item.date !== today);
};
