const input = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");

input.addEventListener("input", () => {
  text.style.fontSize = `${input.value}px`;
  console.log(text);
});
