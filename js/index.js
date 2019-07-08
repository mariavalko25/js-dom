const display = document.querySelector('.calculator .display'),
      numbers = document.querySelectorAll('.digits button'),
      operations = document.querySelectorAll('.opers button'),
      decimalPoint = document.querySelector('.decimal-point'),
      clear = document.querySelector('.clear');

let isNewValue = false,
    currentValue = 0,
    signOfOperation = '';

numbers.forEach(digit => digit.addEventListener('click', digitPressed));
operations.forEach(oper => oper.addEventListener('click', operPressed));
decimalPoint.addEventListener('click', decimalPressed);
clear.addEventListener('click', clearPressed);

function digitPressed(ev) {
  if (isNewValue) {
    display.value = ev.target.innerText;
    isNewValue = false;
  } else {
    if (display.value === '0') {
      display.value = ev.target.innerText;
      //console.log(1);
    } else {
      display.value += ev.target.innerText;
      //console.log(2);
    }
  }
}

function operPressed(ev) {
  let localCurrentValue = display.value;

  if (isNewValue && signOfOperation !== '=') {
    display.value = currentValue;
    isNewValue = false;
  } else {
    isNewValue = true;
    if (signOfOperation === '+') {
      currentValue = +currentValue + +(parseFloat(localCurrentValue));
    } else if (signOfOperation === '-') {
      currentValue -= parseFloat(localCurrentValue);
      console.log(localCurrentValue);
    } else if (signOfOperation === '*') {
      currentValue *= parseFloat(localCurrentValue);
    } else if (signOfOperation === '/') {
      parseFloat(localCurrentValue) === 0 ? currentValue = 'Помилка' : currentValue /= parseFloat(localCurrentValue);
    } else {
      currentValue = localCurrentValue;
    }   

    display.value = currentValue;
    signOfOperation = ev.target.innerText;
  }
}

function decimalPressed() {
  let localDecimalNumber = display.value;
  if (isNewValue) {
    localDecimalNumber = '0.';
    isNewValue = false;
  } else {
    if(localDecimalNumber.indexOf('.') === -1) {
      localDecimalNumber += '.';
    }
  }
  console.log('localDecimalNumber ' + localDecimalNumber);
  display.value = localDecimalNumber;
  display.value = +display.value.toFixed(7);
}

function clearPressed() {
  display.value = '';
  //console.log('Натиснуто ' + display.value);
}

