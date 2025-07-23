// CONTROLLER
addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");

for (let i = 0; i < 20; i++) {
  const box = document.createElement("div");
  box.classList.add("box");

  box.addEventListener("mouseenter", function () {
    const randomColor = getRandomColor();
    box.style.backgroundColor = randomColor;
  });

  container.appendChild(box);
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

  
});
