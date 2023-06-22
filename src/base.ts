//* Interface
export type Measure = [number, number]; //* length, angle
export type Coordinate = [number, number]; //* x, y

//* Functions
export function clearCanvas(canvas: HTMLCanvasElement) {
  canvas.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
}
