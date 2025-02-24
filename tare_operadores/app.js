console.log("AND:");
let and0 = false && false;
let and1 = false && true;
let and2 = true && false;
let and3 = true && true;

console.log("-------------------------------------------");

console.log("|   false   | "+" && "+" |   false   | = "+and0+"   |");
console.log("|   false   | "+" && "+" |   true    | = "+and1+"   |");
console.log("|   true    | "+" && "+" |   false   | = "+and2+"   |");
console.log("|   true    | "+" && "+" |   true    | = "+and3+"    |");

console.log("\n");
console.log("-------------------------------------------");
console.log("\n");

console.log("OR:");
let or0 = false || false;
let or1 = false || true;
let or2 = true || false;
let or3 = true || true;

console.log("-------------------------------------------");

console.log("|   false   | "+" || "+" |   false   | = "+or0+"   |");
console.log("|   false   | "+" || "+" |   true    | = "+or1+"    |");
console.log("|   true    | "+" || "+" |   false   | = "+or2+"    |");
console.log("|   true    | "+" || "+" |   true    | = "+or3+"    |");

console.log("\n");
console.log("-------------------------------------------");
console.log("\n");

console.log("NOT:");
let not0 = !false;
let not1 = !true;

console.log("!false = "+not0);
console.log("!true = "+not1);



