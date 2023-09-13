/*Seeing the World: Think of at least five places in the world you’d like to visit.*/

let locations: string[] = ["Disneyland", "Harry Potter Studio", "babusar top", "China Border", "Naran"];

// Print your array in its original order.
console.log("Original Order");
console.log(locations);

//Print your array in alphabetical order without modifying the actual list.


console.log("\nAlphabetical order:");
let famousPlaces = locations;
console.log([...famousPlaces].sort());

//Show that your array is still in its original order by printing it.
console.log("Original Order");
console.log(locations);

//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\nReverse order:");
let famousPlace2 = locations;
console.log([...famousPlace2].reverse());

//Show that your array is still in its original order by printing it.
console.log("Original Order");
console.log(locations);

//Reverse the order of your list. Print the array to show that its order has changed.
console.log("\nReverse order:");
console.log(locations.reverse());

//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Original Order");
console.log(locations.reverse());

/*Sort your array so it’s stored in alphabetical order. Print the array to show that its 
order has been changed.*/
console.log("\nSort alphabetical order:");
console.log(locations.sort());

/*Sort to change your array so it’s stored in reverse alphabetical order. Print the list to 
show that its order has changed.*/
console.log("\nReverse Alphabetical order:");
console.log(locations.sort().reverse());








