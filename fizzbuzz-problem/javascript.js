// asks user for answer that gets converted from a string to a number by parseInt()
let answer = parseInt(prompt("Please enter the number you like to FizzBuzz up to: "));

// uses for loop to process counter until it gets to answer
// uses if... else to determine if multiples are present
for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}