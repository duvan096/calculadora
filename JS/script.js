let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('pantalla').value = displayValue;
}

function limpiar() {
  displayValue = '';
  document.getElementById('pantalla').value = '';
}

function calcular() {
  try {
    const result = eval(displayValue);
    document.getElementById('pantalla').value = result;
    displayValue = '';
  } catch (error) {
    document.getElementById('pantalla').value = 'Error';
  }
}
