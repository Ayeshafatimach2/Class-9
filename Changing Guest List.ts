/*Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think of someone else 
to invite.

• Start with your program from Exercise --14. Add a print statement at the end of your
 program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of 
the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list. */




let guestList_: string[] = ["Ayesha", "Saman", "Fatima"];
for (let index = 0; index < guestList_.length; index++) {
    console.log(`I would like to invite ${guestList_[index]} in dinner`);
}

//Missing Person
let missingGuest: string = "Fatima";
console.log(`Guest who not come ${missingGuest}`);

// Replacing the name of the guest

guestList_.splice(2, 1, "Zanib");
console.log(guestList_);

// print secound set of invitiion message
guestList_.forEach((guestList_) => {
    console.log(`I would like to invite ${guestList_} in dinner.`);

})
