// add7() takes number a number and adds 7 to it and 
// returns it
function add7(a) {
    return a + 7;
}


// multiply() takes 2 numbers and returns the 
// multiplication of numbers
function multiply(a, b) {
    return a * b;
}


// capitalize() takes a string and returns string 
// with only first letter capitalized 
/*
let str = prompt("What sentence do you want changed to look basic?");

function capitalize(str) {
    let str1 = str.toLowerCase();
    let str2 = str1.charAt(0).toUpperCase() + str1.slice(1);
    alert(str2);
}

capitalize(str);
*/


// lastLetter() takes a string and returns very last
// letter of sring
let words = prompt("Enter sentence to get a surprise letter from the end");

function lastLetter(words) {
    let n = words.length;
    let words1 = words.slice(n-1);
    alert(words1);
}

lastLetter(words);