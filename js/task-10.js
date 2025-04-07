function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumbers = document.querySelector("input");
const btnCreateEl = document.querySelector("button[data-create]");
const btnDestroyEl = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

let boxSize = 30;
let numberOfBoxes = 0;

inputNumbers.addEventListener("input", (e) => {
  numberOfBoxes = e.currentTarget.value;
});

const destroyBoxes = () => {
  boxSize = 30;
  boxes.innerHTML = "";
};

const createBoxes = () => {
  const marcupArr = [];
  for (let i = 0; i < numberOfBoxes; i++) {
    marcupArr.push(
      `<div style="background-color: ${getRandomHexColor()}; width: ${boxSize}px; height: ${boxSize}px"></div>`
    );
    boxSize += 10;
  }

  boxes.insertAdjacentHTML("beforeend", marcupArr.join(""));
};

btnCreateEl.addEventListener("click", createBoxes);
btnDestroyEl.addEventListener("click", destroyBoxes);
