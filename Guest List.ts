/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
 Make a list that includes at least three people you’d like to invite to dinner. 
 Then use your list to print a message to each person, inviting them to dinner.*/

// 1st-Method

let guestList0: string[] = ["Ayesha", "Saman", "Fatima"];
for (let index = 0; index < guestList0.length; index++) {
    console.log(`I would like to invite ${guestList0[index]} in dinner`);

}

// 2nd- Method
let guestList: string[] = ["Ayesha", "Fatima", "Saman"];
console.log(`I would like to invite ${guestList[0]} in dinner`);
console.log(`I would like to invite ${guestList[1]} in dinner`);
console.log(`I would like to invite ${guestList[2]} in dinner`);    
