

/* Think of your favorite mode of transportation, such as a motorcycle or a car,
and make a list that stores several examples. Use your list to print a series of
statements about these items, such as “I would like to own a Honda motorcycle.”*/

var favouriteTrnsport: string[] = ['Honda', 'Suzuki', 'BMW', 'Civic'];

var carProperties: string[] = ["four seater.", "automatic.", "to much expensive.", "gift from relatives."];

for (let index = 0; index < favouriteTrnsport.length; index++) {

    console.log(`I would like to own a ${favouriteTrnsport[index]} because it's ${carProperties[index]}`)

}


