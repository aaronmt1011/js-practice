// showMessage() alerts user with message
// will show progression below until function
// takes on new a meaning

/*
function showMessage() {
    alert('Hello everyone!');
}

showMessage();
showMessage();
*/

/*
function showMessage() {
    let message = "Hello, I'm Javascript!";     // local variable

    alert(message);
}

showMessage();      // Hello, I'm JavaScript!
alert(message);     // <-- Error! The variable is local to the function
*/






// showMessage() still alerts message but uses new variable
// called userName
// will show progression until new stuff happens
/*
let userName = 'John';

function showMessage() {
    let message = 'Hello, ' + userName;
    alert(message);
}

showMessage();      // Hello, John
*/

/*
let userName= 'John';

function showMessage() {
    userName = 'Bob';       // (1) changed the outer variable

    let message = 'Hello, ' + userName;
    alert(message);
}

alert( userName);           // John before the function call

showMessage();

alert ( userName);          // Bob, the value was modified by the function
*/

/*
let userName= 'John';

function showMessage() {
    let userName = "Bob";   // declare a local variable

    let message = 'Hello, ' + userName;
    alert(message);
}

// the function will create and use its own userName
showMessage();

alert(userName);            // John, unchanged, the function did not access the outer variable
*/





// showMessage() function will now include parameters
/*
function showMessage(from, text) {      // parameters: from, text
    alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!');       // Ann: Hello! (*)
showMessage('Ann', "What's up?");   // Ann: What's up? (**)
*/

/*
function showMessage(from, text) {
    from = '*' + from + '*';          // make "from" look nicer
    
    alert(from + ': ' + text);
}

let from = "Ann";

showMessage(from, "Hello");         // *Ann*: Hello

//the value of "from" is the same, the function modified a local copy
alert(from);                        // Ann
*/





// showMessage() function now has a default value
// for one of the parameters
/*
function showMessage(from, text = "no text given") {
    alert(from + ": " + text);
}

showMessage("Ann");             // Ann: no text given
showMessage("Ann", undefined); 
*/





// showMessage() function will now have use alternative default
// parameters that are assigned later on in code (if undefined)
/*
function showMessage(text) {
    // ...

    if(text === undefined) {           // if the parameter is missing
        text = 'empty message';
    }

    alert(text);
}

showMessage();                          // empty message
*/
/*
function showMessage(text) {
    // if text is undefined or otherwise falsy, set it to 'empty'
    text = text || 'empty';
    alert(text);
}

showMessage();
*/











/* 
New functions will be introdu(ced now
*/

/*
// showCount() uses ?? operator to see if count is undefined or null
function showCount(count) {
    alert(count ?? "unknown");
}

showCount(0);           // 0
showCount(null);        // unkown
showCount();            // unkown
*/





/*
// sum(a,b) returns sums of two values
function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
alert(result);
*/







/*
// checkAge() uses age to allow access or not to
// uses a prompt question to initiate function
function checkAge(age) {
    if(age >= 18) {
        return true;
    } else {
        return confirm('Do you have permission from your parents?');
    }
}

let age = prompt('How old are you?', 18);

if(checkAge(age)) {
    alert('Access granted');
    showMovie(age);
} else {
    alert('Access denied');
    noMovie(age);
}

// showMovie() builds upon checkAge() function from above
// if checkAge() returns true, then showMovie() will "show movie" (proceed to alert)
function showMovie(age) {
    alert("Showing you the movie");
}

function noMovie(age) {
    alert("No movie for you. Come back in " + (18 - age) + " years or get permission from parents.");
}
*/





// showPrimes(n) outputs prime numbers up to n 
// first showPrimes(n) is using a label
/*
function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {

        for (let j = 2; j < i; j++) {
            if(i % j == 0) continue nextPrime;
        }
        
        alert(i);
    }
}
*/

// second showPrimes(n) is using an additional function isPrime(n)
/*
function showPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
 
        alert(i);
    }
}

function isPrime(n) {
    for(let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
*/










// following functions will deal with finishing tasks from a learing site

// bottom code deals with first task
/*
function checkAge(age) {
    if(age>18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}
*/

// second function shows no difference in behavior from the first function
// in both functions, return confirm still runs
/*
function checkAge(age) {
    if(age>18) {
        return true;
    }
    return confirm('Did parents allow you?');
}
*/


// code below deals with second task
/*
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}
*/

// both functions below, shorten the code to just one line
// the first uses the ? operator
/*
function checkAge(age) {
    return (age > 18) ? true: confirm('Did parents allow you?');
}
*/

// the second uses the || operator
/*
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}
*/


// code below deals with third task
// have to write a function min(a, b) that returns lower of numbers
// first function deals with task by using if... else conditions
/*
function min(a, b) {
    if(a >= b) {
        return a;
    } else {
        return b;
    }
}
*/

// second function deals with task by using the ? operator
/*
function min(a, b) {
    return (a >= b) ? a: b;
}
*/


// code below deals with fourth task
// have to write function pow(x, n) that returns x to the power of n
// this translates to x being the number while n is the amount of times it
// has to multiply itself
/*
function pow(x, n) {
    return (x**n);
}
*/










// code below uses a function expression to declare a function
// only use this when you cannot use function declarations
// or when using a conditional declaration (example below)
/*
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
    function() {alert("Hello!");} :
    function() {alert("Greetings!");};

welcome();
*/










// code below uses arrow functions to declare functiosn
// uses arrow function to declare a function sum that gets 
// sum of 2 parameters
// also has example of a function expression of sum function
/*
let sum = function(a, b) {
    return a + b;    
};
*/
// arrow function below
/*
let sum = (a, b) => a + b;

alert(sum(1,2));
*/





// double() uses arrow function to get double of parameter
// don't need parentheses around parameters if there's only 1 parameter
/*
let double = n => n * 2;
alert(double(3));
*/





// sayHi() uses arrow function to display hello as an alert
// has no arguments, which means parentheses are left empty
/*
let sayHi = () => alert("Hello!");

sayHi();
*/





// welcome() uses arrow function based off of 
// ? operator (true/false based off expression)
/*
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
    () => alert('Hello!') :
    () => alert('Greetings!');

welcome();
*/





// sum() uses arrow function to get a more complex function (multi-line)
// if we do use multi-lines then we will need a "return"
/*
let sum = (a, b) => {
    let result = a + b;
    return result;
};

alert(sum(1, 2));
*/





// ask() uses three parameters to answer question parameter with other 2 parameters
// first part uses a function expression to declare function
/*
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

//replaced code beblow
ask(
    "Do you agree?",
    function() {alert("You agreed.");},
    function() {alert("You canceled the execution.");}
);

// second part replaces above code with arrown functions
ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);
*/

