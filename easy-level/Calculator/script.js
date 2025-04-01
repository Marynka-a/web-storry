window.onload = function () {
  let display = document.getElementById('display');
  let currentInput = '';

  function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
  }

  function appendOperator(operator) {
    currentInput += ' ' + operator + ' ';
    display.value = currentInput;
  }

  function clearDisplay() {
    currentInput = '';
    display.value = '';
  }

  function calculate() {
    try {
      let result = eval(currentInput);
      display.value = result;
      currentInput = result.toString();
    } catch (error) {
      display.value = 'Помилка';
      currentInput = '';
    }
  }

  // Зв'язуємо функції з кнопками
  window.appendNumber = appendNumber;
  window.appendOperator = appendOperator;
  window.clearDisplay = clearDisplay;
  window.calculate = calculate;
};
