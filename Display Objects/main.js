// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// let txt = "";
// for (let x in person) {
//     txt += person[x] + " ";
// };

// document.getElementById("demo").innerHTML = txt;

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// const myArray = Object.values(person);
// document.getElementById("demo").innerHTML = myArray + " ";

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString + " ";