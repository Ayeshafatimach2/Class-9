/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for 
the dinner, and you have space for only two guests.

Start with your program from Exercise 16. Add a new line that prints a message saying that you 
can invite only two people for dinner.*/

let guests: string[] = ["Ayesha", "Saman", "Fatima"];
for (let index = 0; index < guests.length; index++) {
    console.log(`I would like to invite ${guests[index]} in dinner`);
}


// shrinking list
guests.forEach((guest) => {
    console.log(`Dear ${guests}, I have space for only two guests`);
});


//  Remove guests from your list
while (guests.length > 2) {
    let removeGuest = guests.pop()
    console.log(`sorry ${removeGuest} you are not invited on dinner`);

}

// Print a message to each of the two people still on your list
guests.forEach((guests) => {
    console.log(`Dear ${guests}, you're still invited`);
});


//  Remove the last two names from your list
guests.pop();
guests.pop();
console.log(`empty list at the end of your program: ${guests}`);


