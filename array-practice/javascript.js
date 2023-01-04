/*
// first array created
const cars = ["Saab", "Volvo", "BMW"];

// another way to created same array as above
const cars1 = [
    "Saab",
    "Volvo",
    "BMW"
];

// or this method
const cars2 = [];
cars2[0] = "Saab";
cars2[1] = "Volvo";
cars2[2] = "BMW";


// to refer an array element, use the index number
let car = cars[0];


// to change an array element, use index number with array
cars[0] = "Opel";

// arrays are treated similar to objects, aka they can be called like other objects
alert(cars);
*/




/*
// this is an example of an object
const person = {firstName:"John", lastName:"Doe", age:46};

// this is how to call an object
alert(person.firstName);        // John
*/




/*
// date object
const date = {now:`December 20 2022`, tomorrow:`December 21 2022`};

// myFunction() function 
function myFunction() {
    return(alert("Hey, this is my function - myFunction()"));
}

// myCars array
const myCars = ["BMW","Fiat","Ford"];

const myArray = [];
myArray[0] = Date.now;      // array[0] filled with object
myArray[1] = myFunction;    // array[1] filled with function
myArray[2] = myCars;        // array[2] filled with array
*/




/*
// examples of array properties/methods
const cars = ["Saab", "Volvo", "BMW"];

// Returns the number of elemts
console.log(cars.length);

// Sorts the array
console.log(cars.sort());
*/







// fruits array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);

// to get length of fruit
let fLength = fruits.length;
console.log(fLength);

// accessing first element of fruits array
let firstFruit = fruits[0];
console.log(firstFruit);

// accessing last element of fruits array
let lastFruit = fruits[fLength-1];
console.log(lastFruit);

// using for loop to loop through fruits array
let text = "<ul>";
const para = document.createElement("p");

for (let i = 0; i < fLength; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
console.log(text);

// using Array.forEach() function to loop through fruits array
let text1 = "<ul>";
fruits.forEach(myFunction);
text1 += "</ul>";

function myFunction(value) {
    text1 += "<li>" + value + "</li>";
}
console.log(text1);

// adding new element to fruits array using push() method 
fruits.push("Lemon");
console.log(fruits);

// adding new element to fruits array using length property
fruits[fruits.length] = "Cherry";
console.log(fruits);

// checking if fruits is an array
// can't use type due to array returning object
let type = typeof fruits;
console.log(type);     // object

// Array,isArray() returns correct identification
console.log(Array.isArray(fruits));

// using instanceof operator returns true if object is using array
console.log(fruits instanceof Array);

// toString() to convert array to a string
document.getElementById("fruitsString").innerHTML = fruits.toString();

// join() to return array to a string with a specified seperator
document.getElementById("fruitsJoin").innerHTML = fruits.join(" * ");

/*
// pop() by itself removes the last element from array
fruits.pop();
*/

// can also use pop to make a variable the last element of array
let poppedFruit = fruits.pop();
console.log(poppedFruit);
console.log(fruits);
console.log("");

/*
// push() adds new element to end of array
fruits.push("Cherry");
*/

// push() can also return new array length
let newLength = fruits.push("Cherry");
console.log(newLength);
console.log(fruits);
console.log("");


// shift() removes first element and shifts index of other elements lower
 let fruitShift = fruits.shift();
 console.log(fruitShift);
 console.log(fruits);
 console.log("");

 // unshift() adds new element to first element while shifting index number higher
 let fruitUnshift = fruits.unshift("Banana");
console.log(fruitUnshift);
console.log(fruits);
console.log("");

// splice() is used to add new items to an array, uses 2 parameters in the beginning
// first parameter deals with where new items should be added while,
// second parameter deal with how many elements should be removed
// rest of parameter defines new elements that are going to be added in
fruits.splice(2, 0, "Kiwi", "Pear");
console.log(fruits);

fruits.splice(2, 2, "Strawberry", "Blueberry");
console.log(fruits);

// can also use splice() to remove elements and not leave holes (undefined) 
fruits.splice(0, 1);
console.log(fruits);
console.log("");

// slice() uses (slices) part of an array and places it into a new array
// does not delete the past referenced array indexes (stays the same)
const otherFruits = fruits.slice(4);
console.log(otherFruits);
console.log(fruits);

// can alse use 2 parameters for the start of argument and end of it
const threeFruits = fruits.slice(1, 4);
console.log(threeFruits);
console.log(fruits);
console.log("");




/*
// concat() creates new array by merging (concatenating) arrays
const girls = ["Maria", "Bella", "Tia"];
const boys = ["Jacob", "Xavier", "Leo"];

const people = girls.concat(boys);
console.log(girls);
console.log(boys);
console.log(people);

// concat() can take any number of array arguments (to concatenate at end)
const otherGirls = ["Kealohi", "Jaime", "Bri"];
const otherBoys = ["Joey", "Chris", "Kris"];
const allPeople = girls.concat(boys, otherGirls, otherBoys);
console.log(otherGirls);
console.log(otherBoys);
console.log(allPeople);

// concat() can alse have strings as arguments
const morePeople = allPeople.concat("Marina");
console.log(morePeople);
*/




// utilizing loops to cycle through arrays helps alleviate mundane and repetive tasks
// for example, the for loop below assigns the first item from the cats array
// and console.log() cat. After code is ran, the for loop causes the next item
// in array to be assigned to cat until the for loop cycles through cats array
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (const cat of cats) {
    console.log(cat);
}

// map() can be used to do something to an array and then create a new array
// that contains the changed items (copy changed items into new array)
function toUpper(string) {
    return string.toUpperCase();
}

const upperCats = cats.map(toUpper);
console.log(upperCats);
document.getElementById("cats").innerHTML = upperCats;

// filter() test each item in array and creates a new array containing items
// that have matched with test item (returns True for boolean)
// the test usually uses a function with "test" code and return function
// lCat() uses a boolean to determine whether cat item starts with "L"
// if cat item does start with L, returns true
// filter(lCat) uses lCat() to create new array using items that returned True
// for the previous function
function lCat(cat) {
    return cat.startsWith('L');
}

const filteredCats = cats.filter(lCat);

const quickerCats = cats.filter((cat) => cat.startsWith('L'));

document.getElementById("onlyLCats").innerHTML = filteredCats;

document.getElementById("qLCats").innerHTML = quickerCats;





const catNames = ['Pete', 'Biggles', 'Jasmine'];

let myFavCats = 'My cats are called ';


// using for... of to get names of catNames does not produce intended result
// "My cats are called Pete, Biggles, Jasmine, " will be printed out
/*
for (const cat of catNames) {
    myFavCats += `${cat},`;
}
*/

// to get desired effect, we need to use a for loop
/*
for(let i = 0; i < catNames.length; i++) {
    if (i === catNames.length - 1) {
        myFavCats += `and ${catNames[i]}.`;
    } else {
        myFavCats += `${catNames[i]}, `;
    }
}
// "My cats are called Pete, Biggles, and Jasmine."
*/

// the for loop above can also be re-written as a while loop
let c = 0;

/*
while (c < catNames.length) {
    if(c === catNames.length - 1) {
        myFavCats += `and ${catNames[c]}.`;
    } else {
        myFavCats += `${catNames[c]}, `;
    }

    c++;
}
*/

// the while loop from above can also be written with a do... while loop
do {
    if(c === catNames.length - 1) {
        myFavCats += `and ${catNames[c]}.`;
    } else {
        myFavCats += `${catNames[c]}, `;
    }

    c++;
} while (c < catNames.length);



console.log(myFavCats);
