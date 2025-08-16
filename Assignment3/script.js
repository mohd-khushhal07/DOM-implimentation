document.getElementById("greet").addEventListener("click", function () {
  let nameInput = document.getElementById("nameInput");
  let greeting = document.getElementById("greeting");

  if (nameInput.value.trim() !== "") {
    greeting.innerText = "Hello, " + nameInput.value;
  } else {
    greeting.innerText = "Hello, Guest!";
  }
});

let boxes = document.getElementsByClassName("box");

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    let colorName = boxes[i].innerText.toLowerCase();
    boxes[i].style.backgroundColor = colorName;
    boxes[i].style.color = "white";
  });
}
