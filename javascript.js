/* Math for one of the assignments */

console.log(23 + 97);       // 1

console.log(23 + 97 + 100 + 15 + 13 + 15);      //2

let num1 = (4 + 6 + 9) / 77;            //3
let num2 = num1.toFixed(5);
console.log(num2);

let aba = 10;                         //4
console.log(aba);

const max = 57;                         //5
const actual = max - 13;
const percentage = actual / max;
console.log(percentage.toFixed(4));



/* Following code deals more with educational side
of true and false */

/*
if (1 || 0) {        // works just like if( true || false )
    alert( 'truthy!' );
  }
*/




/* 
Following script deals with nested if...else
Asks who is using with prompt
Gives different response based off answer
*/

/*
let visitor = prompt("Who's there?", '');

if (visitor === 'Admin') {

	let pass = prompt("password?", '');

    if (pass === 'TheMaster') {
        alert( 'Welcome!' );
    } else if (pass === '' || pass === null) {
        alert( 'Canceled' );
    } else {
        alert( 'Wrong password' );
    }

} else if ( visitor === '' || visitor === null) {
	alert ('Canceled');
} else {
	alert ("I don't know you");
}
*/


const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener('keydown', (event) => 
    output.textContent = `You pressed "${event.key}".`);