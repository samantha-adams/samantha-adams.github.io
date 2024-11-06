let prevPointerX = 0;
let prevPointerY = 0;
export const getPointerAngle = (e: MouseEvent | PointerEvent) => {
    const deltaX = e.clientX - prevPointerX;
    const deltaY = e.clientY - prevPointerY;

    // Calculate the angle in radians
    const angle = Math.atan2(deltaY, deltaX);

    // Convert to degrees
    const degrees = angle * (180 / Math.PI);

    // Adjust for negative angles
    const direction = (degrees + 360) % 360;

    prevPointerX = e.clientX;
    prevPointerY = e.clientY;

    return direction;
}

/**
 * Calculates the x and y shift direction based on a given angle.
 *
 * This function takes an angle (in degrees) and returns an object with `xShift`
 * and `yShift` values, which represent the direction of movement on the x and y axes.
 * Using trigonometric functions (`Math.cos` and `Math.sin`), it calculates the
 * direction vector, rounding it to the nearest integer to fit one of eight primary
 * directions: right, left, up, down, and the four diagonals.
 *
 * Example:
 * - An angle of 0° returns `{ xShift: 1, yShift: 0 }` (moving right).
 * - An angle of 135° returns `{ xShift: -1, yShift: 1 }` (moving bottom-left).
 *
 * @param angle - The angle in degrees, where 0° is to the right, increasing counterclockwise.
 * @returns An object with `xShift` and `yShift` values representing the direction of movement.
 */
export const getAngleXYShift = (angle: number): { xShift: number, yShift: number } => {
    const radians = (angle * Math.PI) / 180;
    const xShift = Math.round(Math.cos(radians));
    const yShift = Math.round(Math.sin(radians));
    return { xShift, yShift };
};
