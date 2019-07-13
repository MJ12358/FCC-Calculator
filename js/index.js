var display = document.getElementById('display');
var buttons = document.getElementsByClassName('buttons');

function buttonClick(e, i) {
  buttons[i].classList.add('fade'); // Would like to get some cool animations working
  /*if (display.innerText.trim().length === 12) {
    display.innerHTML = 'Digit Limit';
    var limit = 1;
  } else */ if (e === 'CE') {
    display.innerHTML = '';
  } else if (e === 'BK') {
    display.textContent = display.textContent.slice(0,  -1);
  } else if (e === '=') {
    display.textContent = eval(display.textContent);
  } else {
    display.insertAdjacentHTML('beforeend', e);
  }
} // Close buttonClick function