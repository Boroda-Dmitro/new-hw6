const input = document.querySelector("#validation-input");

const handleClick = (event) => {
  const value = event.target.value.length;
  const inputData = input.dataset.length;

  value == inputData ? (input.classList = "valid") : (input.classList = "invalid");
};

input.addEventListener("blur", handleClick);

