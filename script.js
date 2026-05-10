const btn = document.getElementById("toggleButton");
const img = document.getElementById("flowerImage");

btn.addEventListener("click", function () {
  // Toggles the class "to-disappear" endlessly
  this.classList.toggle("to-disappear");
  img.classList.toggle("to-show");

  // Use the presence of the class to decide the text
  if (this.classList.contains("to-disappear")) {
    this.innerText = "don't click, else the flowers might vanish!";
  } else {
    this.innerText = "click to claim";
  }
});
