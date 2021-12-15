const button = document.querySelector('#myBtn');
button.addEventListener('click', function () {
  alert('You clicked me!');
});

button.addEventListener('click', myFun);

function myFun() {
  alert('You clicked me again!');
}