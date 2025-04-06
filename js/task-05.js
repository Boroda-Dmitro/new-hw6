const input = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const handleClick = (event) => {
  nameOutput.textContent = event.target.value;
  if (nameOutput.textContent === "") {
    nameOutput.textContent = "Anonymous";
  }
};

input.addEventListener("input", handleClick);
