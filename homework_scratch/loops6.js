//Prompt: Write a while loop that does a countdown from the
// variable countdown. This number represents the number that
// a user enters. Check to make sure the number is not larger
// than 10, but greater than or equal to 3. Each time the loop
// runs, print to the console the value of the counter followed
// by three periods (…). Once out of the loop, print to the
// console "We have lift off!". If a number is less than 3
// or greater than 10, then the only message printed to the console
// is "We have lift off!"


//var fs = require("fs");
//var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var countDown= 2// = parseInt(input[0]);
//if( 3 <= countDown <= 10){
if( (3 <= countDown) && ( countDown <= 10)){
    //console.log("loop shit");
    while (countDown > 0){
        console.log(countDown + "...");
        countDown = countDown - 1;
    }
    console.log("We have lift off!");
}

else{
    console.log("We have lift off!");
}