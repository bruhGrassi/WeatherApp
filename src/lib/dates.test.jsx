import { describe, it, expect, vi } from "vitest";
import { getDayOfWeek } from "./dates";

describe("getDayOfWeek", () => {
  it("should return 'Tomorrow' for the date after today", () => {
    const mockDate = new Date(2024, 0, 7);
    vi.setSystemTime(mockDate);

    const dayIndex = (mockDate.getDay() + 1) % 7;
    expect(getDayOfWeek(dayIndex)).toBe("Tomorrow");
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
    for (let i = 0; i < 7; i++) {
      if (i !== (today + 1) % 7) {
        expect(getDayOfWeek(i)).toBe(
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ][i]
        );
      }
    }
  });
});
