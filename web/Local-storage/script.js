let wisdom = [];

window.onload = function () {
  const savedWisdom = JSON.parse(localStorage.getItem("wisdom"));
  if (savedWisdom) {
    wisdom = savedWisdom;
    renderWisdom();
  }
};

function renderWisdom() {
  let displayWisdom = document.getElementById("display-wisdom");
  displayWisdom.innerHTML = "";
  wisdom.forEach((w) => {
    const div = document.createElement("div");
    div.className = "wisdom-item";
    div.innerHTML = `${w.text} <span class="delete-btn" data-id="${w.id}">x</span>`;
    displayWisdom.appendChild(div);
  });

  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = Number(e.target.getAttribute("data-id"));
      wisdom = wisdom.filter((w) => w.id !== id);
      localStorage.setItem("wisdom", JSON.stringify(wisdom));
      renderWisdom();
    });
  });
}

$("#display-btn").on("click", display);
$("#input-display").on("keyup", function (e) {
  if (e.key === "Enter" || e.keyCode === 13) {
    display();
  }
});
function display() {
  let inputDisplay = document.getElementById("input-display");
  const inputData = inputDisplay.value.trim();
  if (!inputData) return;

  const newWisdom = { text: inputData, id: Date.now() };
  wisdom.push(newWisdom);
  renderWisdom();
  inputDisplay.value = "";

  if (wisdom.length % 2 === 0) {
    localStorage.setItem("wisdom", JSON.stringify(wisdom));
  }
}

document.getElementById("clear-btn").addEventListener("click", () => {
  wisdom = [];
  localStorage.removeItem("wisdom");
  renderWisdom();
});
