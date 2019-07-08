const display = document.querySelector('.calculator .display'),
      numbers = document.querySelectorAll('.digits button'),
      operations = document.querySelectorAll('.opers button'),
      decimalPoint = document.querySelector('.decimal-point'),
      clear = document.querySelector('.clear');

let isNewValue = true,
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
      console.log(1);
    } else {
      display.value += ev.target.innerText;
      console.log(2);
    }
  }
}

function operPressed(ev) {
  let prevValue = display.value;

  if (isNewValue && signOfOperation !== '=') {
    display.value = currentValue;
    isNewValue = false;
  } else {
    isNewValue = true;
    if (signOfOperation === '+') {
      let cutval = parseFloat(prevValue);
      currentValue = +currentValue + +cutval;
    } else if (signOfOperation === '-') {
      if (display.value === '') {
        currentValue = signOfOperation + currentValue;
        console.log('currentValue ' + currentValue);
        console.log('signOfOperation' + signOfOperation);

      } else {
        currentValue -= parseFloat(prevValue);
      }
    } else if (signOfOperation === '*') {
      currentValue *= parseFloat(prevValue);
    } else if (signOfOperation === '/') {
      parseFloat(prevValue) === 0 ? currentValue = 'Помилка' : currentValue /= parseFloat(prevValue);
    } else {
      currentValue = prevValue;
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
    console.log(3);
  } else {
    if(localDecimalNumber.indexOf('.') === -1) {
      localDecimalNumber += '.';
    }
  }
  console.log('localDecimalNumber ' + localDecimalNumber);
  display.value = localDecimalNumber;
  display.value.toFixed(2);
}

function clearPressed() {
  display.value = '';
  console.log('Натиснуто ' + display.value);
}

