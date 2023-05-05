/* 

This is an example of an array with a single array object.

*/
/*
let car = {
    "color": "purple",
    "type": "minivan",
    "regristration": new Date('2012-02-03'),
    "capacity": 7
}
*/


/* 

This is an example of an array with a multiple array object.

*/

let cars = [
    {
        "color": "purple",
        "type": "minivan",
        "regristration": new Date('2012-02-03'),
        "capacity": 7
    },
    {
        "color": "red",
        "type": "station wagon",
        "regristration": new Date('2018-03-03'),
        "capacity": 6
    },
    {
        "color": "blue",
        "type": "sedan",
        "regristration": new Date('2017-01-03'),
        "capacity": 5
    },
    {
        "color": "orange",
        "type": "truck",
        "regristration": new Date('2014-08-04'),
        "capacity": 6
    }
]

let car = {
    "color": "pink",
    "type": "suv",
    "regristration": new Date('2016-01-03'),
    "capacity": 7
}

let car1 = {
    "color": "yellow",
    "type": "electric car",
    "regristration": new Date('2016-01-03'),
    "capacity": 5
}

let car2 = {
    "color": "brown",
    "type": "semi-truck",
    "regristration": new Date('2004-04-02'),
    "capacity": 5
}

/*

Code below are various functions that can be used with array objects

*/

 
// .unshift() adds an object at the first position of the array 
cars.unshift(car);


// .push() adds an object to the last position of the array
cars.push(car1);


// .splice() can be used to add an object to any position of the array
cars.splice(2, 0, car2);
console.log(cars);

