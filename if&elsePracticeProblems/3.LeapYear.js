"use strict";

const ps = require("prompt-sync");
const prompt = ps();

let year = prompt("Enter year in YYYY format: ");
            
let A = year%4;
let B = year%100;
let C = year%400;
            
if (B == 0 && C == 0)
{
    console.log(year+" is Leap Year.");
}
else if (A==0)
{
    console.log(year + " is Leap Year.");
}
else
{
    console.log(year + " is Not a Leap Year.");
}