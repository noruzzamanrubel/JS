function myMove() {
  const element = document.querySelector("#animate");
  const element2 = document.querySelector("#demo");
  let pos = 0;
  id = setInterval(fame, 10);

  function fame() {
    if (pos < 350) {
      pos++;
      element.style.top = pos + "px";
      element.style.left = pos + "px";
      element2.style.top = pos + "px";
      element2.style.right = pos + "px";
    } else {
      clearInterval(id);
    }
  }
}