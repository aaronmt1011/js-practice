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
        "capacity": 9
    },
    {
        "color": "black",
        "type": "supercar",
        "regristration": new Date('2021-10-16'),
        "capacity": 2
    },
    {
        "color": "red",
        "type": "station wagon",
        "regristration": new Date('2018-03-03'),
        "capacity": 7
    },
    {
        "color": "white",
        "type": "motorcycle",
        "regristration": new Date('2011-10-16'),
        "capacity": 1
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
    },
    {
        "color": "green",
        "type": "beatle",
        "regristration": new Date('2013-10-16'),
        "capacity": 2
    }
]

let car = {
    "color": "red",
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
    "capacity": 4
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



// .find() returns a matching element from defined properties
// .find() will be used to find a red car
let redCar = cars.find(car => car.color === "red");
console.log(redCar);

// .find() can also be used to search for an element with multiple properies
// .find() is used below to find a specific brown car from the array
let brownCar = cars.find(car => car.color === "brown" && car.capacity === 5);
console.log(brownCar);



// .filter() returns all matching elements
// .filter() is used to return all red cars
let redCars = cars.filter(car => car.color === "red");
console.log(redCars);



// .map() transforms old array into seperate arrays
// .map() is used below to seperate elements of the array into their own groups
let carSizes = cars.map(car => {
    if(car.capacity <=3){
        return "small";
    }
    if(car.capacity <= 5){
        return "medium";
    }
    return "large";
});
console.log(carSizes);

// .map() can also be used to create more objects
let carProps = cars.map(car => {
    let properties = {
        "capacity": car.capacity,
        "size": "large"
    };
    if (car.capacity <= 5){
        properties['size'] = "medium";
    }
    if (car.capacity <= 3){
        properties['size'] = "small";
    }
    return properties;
});
console.log(carProps);



// .forEach() is used to go through each element of an array
// .forEach() is used below to go through cars array and adds new object
cars.forEach(car => {
    car['size'] = "large";
    if(car.capacity <= 5){
        car['size'] = "medium";
    }
    if(car.capacity <= 3){
        car['size'] = "small";
    }
});
console.log(cars);



// .sort() compares 2 objects ands puts the which ever first in order depending
// on the function that is used to sort.
// .sort() is used below to compare the different car objects capacity.
// Make sure to always add the case for zero when the compared value of both 
// objects is the same to avoid unnecessary swaps.
let sortedCars = cars.sort((c1, c2) => (c1.capacity < c2.capacity) ? 1 : (c1.capacity> c2.capacity) ? -1 : 0);
console.log(sortedCars);



// .some() is useful for checking if an object fulfills a conditions
// .some() is used below to check if there is an array element that is red and 
// has a seating capacity of 7. (should be true)
console.log(cars.some(car => car.color === 'red' &&  car.capacity === 7));



// .every() is similar as .some() but it checks if every array object fulfulls
// the condition
// .every() is used to check if every array element has a capacity of 5 or more
// This should be false.
console.log(cars.every(car => car.capacity >= 5));