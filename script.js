// FUNCTION FOR GETTING NUMBERS
let getNumber = (num) => {
  let inp = document.getElementById("inp");
  inp.value += num;
};

// FUNCTION FOR ERASING NUMBER
let eraseNumber = () => {
  let inp = document.getElementById("inp");
  inp.value = "";
};

// FUNCTION FOR CALCULATING NUMBER
let calcNumber = () => {
  let inp = document.getElementById("inp");
  inp.value = eval(inp.value);
};
