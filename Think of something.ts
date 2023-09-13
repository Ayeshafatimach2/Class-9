/*Think of something you could store in a array. For example, you could make a list of 
mountains, rivers, countries, cities, languages, or anything else you’d like. 
Write a program that creates a list containing these items.*/

// 1-Method
let list: string[] = [];
list[0] = "Disneyland";
list[1] = "Harry Potter Studio";
list[2] = "babusar top";
list[3] = "China Border";
list[4] = "Naran";
console.log(list);

// 2-Method

let list2: string[] = ["Disneyland", "Harry Potter Studio", "babusar top", "China Border", "Naran"];
for (let index = 0; index < list2.length; index++) {

    console.log(list2[index]);

}


