const paraElement = document.querySelector('.js-calculation');
const zeroBtn = document.querySelector('.zero');
const oneBtn = document.querySelector('.one');
const twoBtn = document.querySelector('.two');
const threeBtn = document.querySelector('.three');
const fourBtn = document.querySelector('.four');
const fiveBtn = document.querySelector('.five');
const sixBtn = document.querySelector('.six');
const sevenBtn = document.querySelector('.seven');
const eightBtn = document.querySelector('.eight');
const nineBtn = document.querySelector('.nine');
const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');
const modBtn = document.querySelector('.mod_btn');
const clearBtn = document.querySelector('.c_btn');
const openBrac = document.querySelector('.o_btn');
const closeBrac = document.querySelector('.cl_btn');
const dotBtn = document.querySelector('.dot');
const equalBtn = document.querySelector('.equal');

let calculation = '';

function updateCalculation(val) {
  calculation += val;
  paraElement.innerHTML = calculation;
}

zeroBtn.addEventListener("click", () => {
  updateCalculation('0');
});

oneBtn.addEventListener("click", () => {
  updateCalculation('1')
});

twoBtn.addEventListener("click", () => {
  updateCalculation('2');
});

threeBtn.addEventListener("click", () => {
  updateCalculation('3');
});

fourBtn.addEventListener("click", () => {
  updateCalculation('4');
});

fiveBtn.addEventListener("click", () => {
  updateCalculation('5');
});

sixBtn.addEventListener("click", () => {
  updateCalculation('6');
});

sevenBtn.addEventListener("click", () => {
  updateCalculation('7');
});

eightBtn.addEventListener("click", () => {
  updateCalculation('8');
});

nineBtn.addEventListener("click", () => {
  updateCalculation('9');
});

plusBtn.addEventListener("click", () => {
  updateCalculation(' + ');
});

minusBtn.addEventListener("click", () => {
  updateCalculation(' - ');
});

multiplyBtn.addEventListener("click", () => {
  updateCalculation(' * ');
});

divideBtn.addEventListener("click", () => {
  updateCalculation(' / ');
});

modBtn.addEventListener("click", () => {
  updateCalculation(' % ');
});

clearBtn.addEventListener("click", () => {
  calculation = "";
  paraElement.innerHTML = calculation;
});

openBrac.addEventListener("click", () => {
  calculation = "(";
});

closeBrac.addEventListener("click", () => {
  updateCalculation(")");
});

dotBtn.addEventListener("click", () => {
  updateCalculation(".");
});

equalBtn.addEventListener("click", () => {
    calculation = eval(calculation); 
    paraElement.innerHTML = calculation;
})
