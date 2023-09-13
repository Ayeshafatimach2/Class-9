/*Changing Guest List: You just heard that one of your guests can’t make the dinner,so you need 
to send out a new set of invitations. You’ll have to think of someone else to invite.*/


/*• Start with your program from Exercise 14. Add a print statement at the end of your program 
stating the name of the guest who can’t make it.*/



// print of exicting guest

let guest: string[] = ["Ayesha", "Saman", "Fatima"];
for (let index = 0; index < guest.length; index++) {
    console.log(`I would like to invite ${guest[index]} in dinner`);
}

guest.forEach((guest) => {
    console.log(`I would like to inform ${guest} that we found big tabel for dinner`);

});

// • Add one new guest to the beginning of your array.

guest.unshift("Zanib");
console.log(guest);

// Add one new guest to the middle of your array

guest.splice(2, 0, "Rabia");
console.log(guest);

// Use append() to add one new guest to the end of your list

guest.push("Eman");
console.log(guest);

// Print a new set of invitation messages, one for each person in your list.

guest.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited in dinner.`);
});




