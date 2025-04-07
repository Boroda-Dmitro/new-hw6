function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyBlock = document.querySelector("body");
const colorName = document.querySelector(".color");
const colorChangeBtn = document.querySelector(".change-color");

const handleClick = (event) => {
  const newColor = getRandomHexColor();
  bodyBlock.style.backgroundColor = newColor;
  colorName.textContent = newColor;
};

colorChangeBtn.addEventListener("click", handleClick);
