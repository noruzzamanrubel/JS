// const letters = new Set(["a", "b", "c"]);
// document.getElementById("demo").innerHTML = letters.size;
// letters.add("d");
// letters.add("e");
// letters.add("f");
// console.dir(letters);

// Create a Set
const letters = new Set(["a", "b", "c"]);
console.log(letters.values());

// List all entries
let text = "";
letters.forEach(function (value) {
    text += value;
})
document.getElementById("demo").innerHTML = text;

const a = {
    firstNmae: "John",
    lastName: "Doe"
}
console.log(Object.entries(a));