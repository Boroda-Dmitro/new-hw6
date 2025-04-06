const counter = document.querySelector("#counter");
const value = document.querySelector("#value");

value.textContent = 0;

const handleClick = (event) => {
    const target = event.target.dataset.action;
  
    if (target === "increment") {
      value.textContent = +value.textContent + 1;
    }
    
    if (target === "decrement") {
      value.textContent = +value.textContent - 1;
    }
  };
  

counter.addEventListener("click", handleClick);
