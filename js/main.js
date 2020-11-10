var elForma = document.querySelector('.forma');
var elDegreeInput = elForma.querySelector('.degree-input');
var elFizz = elForma.querySelector('.fizz');
var elBuzz = elForma.querySelector('.buzz');
var elFizzBuzz = elForma.querySelector('.fizzbuzz');
var elNumberFizz = elForma.querySelector('.number-fizz');
var elNumberBuzz = elForma.querySelector('.number-buzz');
var elNumberFizzBuzz = elForma.querySelector('.number-f-b');

var arrFizzBuzz = [];
var arrFizz = [];
var arrBuzz = [];

elForma.addEventListener('submit', function (e) {
  e.preventDefault();

  elFizzBuzz.textContent = '0';
  elFizz.textContent = '0';
  elBuzz.textContent = '0';
  
  for (let i = 1; i <= elDegreeInput.value; i++) {
    
    if (i % 3 === 0 && i % 5 ===0 ) {
      arrFizzBuzz.push(i);
      elFizzBuzz.textContent = arrFizzBuzz.join(', ');
      
    } else if (i % 3 === 0) {
      arrFizz.push(i);
      elFizz.textContent = arrFizz.join(', ');
      
    } else if (i % 5 === 0) {
      arrBuzz.push(i);
      elBuzz.textContent = arrBuzz.join(', ');
      
    }
    
  }
  
  elNumberFizzBuzz.textContent = arrFizzBuzz.length;
  elNumberFizz.textContent = arrFizz.length;
  elNumberBuzz.textContent = arrBuzz.length;
  
  elDegreeInput.value = '';
  arrFizzBuzz = [];
  arrFizz = [];
  arrBuzz = [];
  
});