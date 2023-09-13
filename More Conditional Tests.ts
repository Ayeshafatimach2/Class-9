/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
 If you want to try more comparisons, write more tests. Have at least one True and one False 
 result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than 
  or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/


let stationary: string = "Pen";

console.log(stationary  ==   "pen");
console.log(stationary  ===  "Pencil");
console.log(stationary  !==  "pen");
console.log(stationary  ===  "Scale");
console.log(stationary  ===  "Pen");

console.log(stationary.toLocaleLowerCase()==="pen");

let pocketMoney: number = 5000;

console.log(pocketMoney  ==   5000);
console.log(pocketMoney  ===  2700);
console.log(pocketMoney  >    2500);
console.log(pocketMoney  <    6532);
console.log(pocketMoney  >=   5400);
console.log(pocketMoney  <=   9400);


let shopping: string = "Dress";
let price: number = 3000;

console.log(shopping === "Dress" && price > 2900);
console.log(shopping === "Dress" && price > 3900);
console.log(shopping === "Dress" || price > 5000);
console.log(shopping === "dress" || price > 6000);

let places: string[] = ["Disneyland", "Harry Potter Studio"]

console.log(places.includes("Park"));
console.log(places.includes("Disneyland"));






