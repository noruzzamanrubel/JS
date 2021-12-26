// function sum(x = 2, y = 2) {
//     return x * y;
// }
// console.log(sum(8, 8));

// const x = findMax(1, 123, 500, 115, 44, 88, 1000);

// function findMax() {
//     let max = -Infinity;
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }

// console.log(x);

// function sum() {
//     let result = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         result += arguments[i];
//     }
//     return result;
// }
// m = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(sum(m));


// const person = {
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }
// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// }
// const person2 = {
//     firstName: "Mary",
//     lastName: "Doe"
// }

// // This will return "John Doe":
// console.log(person.fullName.call(person1));
// // console.log(person.fullName());

const person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + " lives in" + city + " " + country;
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));