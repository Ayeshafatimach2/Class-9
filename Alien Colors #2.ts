/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else 
 chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for 
shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.*/

// earned 5 point
let alien_color2: string = 'green';
if (alien_color2 === 'green') {
    console.log("You have earned 5 points.");

}
else if (alien_color2 === 'yellow') {

    console.log("You have earned 10 points.");

}
else {

    console.log("You have not earned any points");

}

//earned 10 point

alien_color2 = 'yellow';

if (alien_color2 === 'geen') {
    console.log("You have earned 5 points.");

}
else if (alien_color2 === 'yellow') {
    console.log("You have earned 10 points.");

}
else {
    console.log("You have not earned any points");

}