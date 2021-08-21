"use strict";

const ps = require("prompt-sync");
const prompt = ps();

let a = prompt("Enter a = ");
let b = prompt("Enter b = ");
let c = prompt("Enter c = ");

let x = a + b * c;
let y = a % b + c;
let z = c + a / b;
let w = a * b + c;

console.log("Maximum value = " + Math.max(x, y, z, w));
console.log("Minimum value = " + Math.min(x, y, z, w));