import "./style.css";
import { clearCanvas, Measure, Coordinate } from "./base";

//* Initial setup
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

document.getElementById("app")?.appendChild(canvas);

//* Setting up canvas
canvas.width = innerWidth;
canvas.height = innerHeight;

//* Drawing setup
let point: Coordinate = [innerWidth / 2, innerHeight / 2];
let length = 0,
  angle = 0;

//* Main function
function draw(
  context: CanvasRenderingContext2D,
  func: (para: Measure) => Measure
) {
  [length, angle] = func([length, angle]);

  context.beginPath();
  context.strokeStyle = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`;
  context.moveTo(...point);
  context.lineTo(
    point[0] + length * Math.cos(angle),
    point[1] + length * Math.sin(angle)
  );
  context.closePath();
  context.stroke();
}

//* Start the drawing
if (context) {
  clearCanvas(canvas);
}
