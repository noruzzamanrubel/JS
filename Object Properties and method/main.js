// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
// };

// document.getElementById("demo").innerHTML = person.firstName + " " + person.lastName + " is " + person.age + " years old." + " His eye color is " + person.eyeColor;

const person = {
    firstName: "Rubel",
    lastName: "Ahmed",
    id: 5566,
    color: "blue",
    age: 30,
    fullName: function () {
        return this.myFev();
    },
    myFev: function () {
        return this.firstName + " " + this.lastName + " is " + this.age + " years old." + " His eye color is " + this.color + " and he lives in " + this.country;
    }

};
console.log(person);
person.country = "Bangladesh";
console.log(person.fullName());

const human = {
    fname: "John",
    lname: "Doe",
    age: 25
};

human.age = 30;
delete human.age;

let txt = "";
for (let x in human) {
    // txt = txt + human[x] + " ";
    txt += human[x] + " ";
}
console.log(txt);