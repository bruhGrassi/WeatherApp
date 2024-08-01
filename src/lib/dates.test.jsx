import { describe, it, expect, vi } from "vitest";
import { getDayOfWeek, DAYS_OF_WEEK } from "./dates";

describe("getDayOfWeek", () => {
  it("should return 'Tomorrow' for the date after today", () => {
    const today = new Date(2024, 0, 7);
    vi.setSystemTime(today);

    const tomorrow = new Date(2024, 0, 8).getDay();
    expect(getDayOfWeek(tomorrow)).toBe("Tomorrow");
  });

  it("should return the correct day of the week", () => {
    const dayIndex = 2;
    expect(getDayOfWeek(dayIndex)).toBe("Tuesday");
  });

  it('should return "Sunday" for index 0', () => {
    expect(getDayOfWeek(0)).toBe("Sunday");
  });

  it('should not return "Tomorrow" for any index other than the next day', () => {
    const today = new Date().getDay();
    const tomorrowIndex = today + 1;

    DAYS_OF_WEEK.forEach((day, index) => {
      if (index !== tomorrowIndex) {
        expect(getDayOfWeek(index)).toBe(day);
      }
    });
  });
});
