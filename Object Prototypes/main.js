function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    // this.nationality = "English";
}

Person.prototype.nationality = "English";

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

document.getElementById("demo").innerHTML = "The nationality of my father is " + myFather.nationality;

console.log(myFather)