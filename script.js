const circle = document.getElementById("1");
const bth_red = document.querySelector(".bth_red");
const bth_green = document.querySelector(".bth_green");
const bth_blue = document.querySelector(".bth_blue");

bth_red.addEventListener("click", () => {
  circle.classList.toggle("activeRed");
  circle.classList.remove("activeGreen");
  circle.classList.remove("activeBlue");
});

bth_green.addEventListener("click", () => {
  circle.classList.toggle("activeGreen");
  circle.classList.remove("activeRed");
  circle.classList.remove("activeBlue");
});

bth_blue.addEventListener("click", () => {
  circle.classList.toggle("activeBlue");
  circle.classList.remove("activeRed");
  circle.classList.remove("activeGreen");
});

const button2 = document.querySelector(".button2");
const circle2 = document.getElementById("2");

const colorsArr = ["Red", "Green", "Blue", "Gray", "Orange"];

function colors(arr) {
  for (let i = 0; i < arr.length; i++) {
    const newBth = document.createElement("button");
    newBth.innerText = arr[i];
    newBth.style.backgroundColor = arr[i];
    newBth.classList.add("btnArr");
    newBth.addEventListener("click", () => {
      circle2.style.backgroundColor = arr[i];
    });
    button2.append(newBth);
  }
}
colors(colorsArr);
