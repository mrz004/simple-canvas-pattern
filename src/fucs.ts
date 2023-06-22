import { Measure } from "./base";

export function rootCalc([length, angle]: Measure) {
  if (length < 1) length = Math.floor(Math.random() * 10 + 90);
  else length = Math.sqrt(length);

  if (angle < 10) angle = Math.floor(Math.random() * 20 + 100);
  else angle = Math.sqrt(angle);

  return [length, angle];
}
