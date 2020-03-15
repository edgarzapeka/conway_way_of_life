import * as wasm from "wasm-game-of-life";

//wasm.greet();

const form = document.getElementById("myForm");
form.onsubmit = event => {
  event.preventDefault();
  const firstNumber = document.getElementById("firstNumber").value;
  const secondNumber = document.getElementById("secondNumber").value;
  const result = wasm.sum(firstNumber, secondNumber);
  alert(`The result: ${result}`);
};

const nameButton = document.getElementById("nameButton");
nameButton.onclick = () => {
  const nameVal = prompt("What's you name fella?");
  wasm.print_name(nameVal);
};
