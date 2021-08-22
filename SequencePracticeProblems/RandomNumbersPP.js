//Problem 1 : single digit number
let Take = (Math.floor(Math.random() * 10));
console.log("Single digit random number =  " + Take);

//Problem 2 : random dice number
let num = (Math.floor(Math.random() * 6) + 1);
console.log("random dice  number = " + num);



//Problem 3: Addition of two random dice number
let num1 = (Math.floor(Math.random() * 6) + 1);
let num2 = (Math.floor(Math.random() * 6) + 1);
let Addition = num1 + num2;
console.log("Addition of the two random dice number = " + Addition);



//problem 4 : Sum and average  of two digit random number
let number1 = (Math.floor(Math.random() * 99) + 1);
let number2 = (Math.floor(Math.random() * 99) + 1);
let number3 = (Math.floor(Math.random() * 99) + 1);
let number4 = (Math.floor(Math.random() * 99) + 1);
let number5 = (Math.floor(Math.random() * 99) + 1);

let sum = (number1 + number2 + number3 + number4 + number5);
console.log("Sum of 5 two digit random number is  = " + sum);

let Average = sum / 5;
console.log("Average of five two digit random number is  = " + Average);


//problem 5 : Unit conversion

//problem 5.1 : inch to feet conversion
let inches = 42;
let InchToFeet = inches / 12;
console.log("Inch to feet conversion =  " + InchToFeet);


//problem 5.2 : Rectangle conversion of feet into meters 
let plotInFeet = 60 * 40;
let plotInMeters = plotInFeet / 3.2808;
console.log("Conversion of rectangle into meters =  " + plotInMeters);


//problem 5.3 : Calculation of 25 plots into meters
let plotInFeet1 = 60 * 40;
const numOfPlots = 25;
let plotInMeters1 = numOfPlots * (plotInFeet1 / 3.2808);
console.log("Calculaton of 25 plots  =" + plotInMeters1);