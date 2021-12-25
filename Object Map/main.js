const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

document.getElementById("demo").innerHTML = fruits.get("apples");