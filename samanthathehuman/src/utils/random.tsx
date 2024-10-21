// Generates a random offset within the specified range, centered around zero.
// @param range - The total width of the offset range.
export const getRandomOffset = (range: number) => (
  Math.floor(Math.random() * range) - range / 2
);

// Generates a random integer within the specified range, inclusive of both min and max.
export const getRandomNumberInRange = (min: number, max: number): number => (
  Math.floor(Math.random() * (max - min + 1) + min)
);