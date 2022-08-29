function start() {
  var buttonSearch = document.querySelector('#search-button');
  buttonSearch.addEventListener('click', handleButtonClick);

  handleButtonClick();
}

function handleButtonClick(num) {
  var fiboArray = [0, 1];
  var inputNum = document.querySelector('#input-num');
  var num = Number(inputNum.value);
  var resultSearch = document.querySelector('#result');
  for (i = 2; i <= num; i++) {
    fiboArray[i] = fiboArray[i - 1] + fiboArray[i - 2];
  }
  for (i = 0; i < fiboArray.length; i++) {
    if (fiboArray.includes(num) || num < 4) {
      result = 'O numero ' + num + ' esta presente na sequência!';
    } else {
      result = 'O numero ' + num + ' não esta presente na sequência...';
    }
  }
  resultSearch.textContent = result;
}

start();
