/*const link = document.querySelector('a');
link.textContent = 'Mozilla Developer Network';
link.href = 'https://developer.mozilla.org';

const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);
const text = document.createTextNode(
  ' — the premier source for web development knowledge.'
);
const linkPara = document.querySelector('p');
linkPara.appendChild(text);

sect.appendChild(linkPara);
// sect.removeChild(linkPara);
linkPara.parentNode.removeChild(linkPara);

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';

para.classList.add('chosen');*/

// document.querySelector('.click-me').addEventListener('click', showAlert);

// function showAlert() {
//   alert('Button clicked!');
// }

/*const clockDisplay = document.querySelector('.clock');
setInterval(
  () => (clockDisplay.innerText = new Date().toLocaleTimeString()),
  1000
);*/

const display = document.querySelector('.calculator .display');

document
  .querySelectorAll('.digits button')
  .forEach(digit => digit.addEventListener('click', digitPressed));

function digitPressed(ev) {
  display.value += ev.target.innerText;
}

document
  .querySelectorAll('.opers button')
  .forEach(oper => oper.addEventListener('click', operPressed));

let signOfOperation;
function operPressed(ev) {
  signOfOperation = ev.target.innerText;
  console.log(signOfOperation);
  display.value += ev.target.innerText;
}


document.querySelector('.clear').addEventListener('click', resetPressed);

function resetPressed() {
  display.value = '';
}

let operationPower = document.querySelector('.operation-power').innerHTML;
//console.log(operationPower);

/*function powerPressed(ev) {
  //display.value += ev.target.InnerText;
  console.log(display.value);
}*/

document.querySelector('.operation-power').addEventListener('click', powerPressed);

function powerPressed(ev) {
  display.value = Math.pow(display.value, 2);
}

function operationToPower() {
  
}

document.querySelector('.equal').addEventListener('click', equalPressed);

function equalPressed() {
  let arr = display.value.split('/');
 
  console.log(arr);
  display.value = eval(display.value);
  console.log(display.value);
}
