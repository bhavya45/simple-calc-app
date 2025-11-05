const { calculateTotal } = require("./script");

test("calculates total without discount", () => {
  expect(calculateTotal(100, 2, 0)).toBe(200);
});

test("calculates total with discount", () => {
  expect(calculateTotal(100, 2, 10)).toBe(180);
});

test("handles zero quantity", () => {
  expect(calculateTotal(100, 0, 10)).toBe(0);
});

test("handles floating values correctly", () => {
  expect(calculateTotal(99.99, 3, 5)).toBeCloseTo(284.97, 2);
});
