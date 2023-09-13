/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with 
a message that reads I love TypeScript. Make a large shirt and a medium shirt with the 
default message, and a shirt of any size with a different message.*/

function make_shirts(size: string = "Large", message: string = "I love TypeScript") {

    console.log(`Size of shirt ${size} and message ${message}`);

}
make_shirts()
make_shirts("Medium", "You become what you believe");