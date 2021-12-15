// function changeText(id) {

//   id.innerHTML = "Hello World";
//   // const title = document.querySelector("#title");
//   // title.innerHTML = "Hello World";
// }

//function is called from the event handler

const btn = document.querySelector("#btn");

btn.onclick = function () {
  const title = document.querySelector("#title");
  title.innerHTML = "Hello World";
};

//The onchange Event
function upperCase() {
  const input_val = document.querySelector("#fname");
  input_val.value = input_val.value.toUpperCase();
}

//onmouseover and onmouseout Events

function mOver(id) {
  id.innerHTML = "thank you";
}
function mOut(id) {
  id.innerHTML = "hello world";
}