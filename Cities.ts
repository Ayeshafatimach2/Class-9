/*Cities: Write a function called describe_city() that accepts the name of a city and its 
country. The function should print a simple sentence, such as Karachi is in Pakistan. 
Give the parameter for the country a default value. Call your function for three 
different cities, at least one of which is not in the default country.*/

function cities(city: string = "Multan", country: string = "Pakistan") {

    console.log(`${city} is in ${country}`);

}
cities();
cities("Chicago", "USA");
cities("Manchester", "UK");