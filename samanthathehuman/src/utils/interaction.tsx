let prevPointerX = 0;
let prevPointerY = 0;
export const getPointerDirection = (e: MouseEvent | PointerEvent) => {
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
