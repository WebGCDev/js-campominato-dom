const container = document.querySelector('.container');
const choiceLevel = document.querySelector('.choice-level');
const chooseLevel = document.getElementById('stages');
const message = document.getElementById('output');
let counterPoints = 0;
let numberBlackList = [];
let stopCondition = false;

reset();
console.log(numberBlackList);

//Semplifico la funzione

function init(stage, n) {
  for (let i = 1; i <= n; i++) {
    let square = genSquare(uniqueRandomNumber(1, n));
    square.classList.add(stage);
    if (square.id <= 16) {
      square.classList.add('hideBomb');
    }
    container.append(square);
  }
  console.log(numberBlackList);
}

//Bottore Start & Select Level
function genBtnStart() {
  const btn = document.createElement('button');
  btn.className = 'btn-play';
  btn.innerHTML = 'Start';

  btn.addEventListener('click', function () {
    clear();
    if (chooseLevel.value === 'facile') {
      init('facile', 100);
      win(100, 16);
    } else if (chooseLevel.value === 'normale') {
      init('normale', 81);
    } else if (chooseLevel.value === 'difficile') {
      init('difficile', 49);
    }
  });
  return btn;
}

// Generatore di quadrati
function genSquare(index) {
  const newSquare = document.createElement('div');
  newSquare.className = 'square';
  newSquare.id = index;
  newSquare.addEventListener('click', clickedCheck);
  return newSquare;
}

//Funzione che mi permetta di cliccare sul quadrato
function clickedCheck() {
  if (!stopCondition) {
    if (this.id <= 16) {
      const bombExplosion = document.getElementsByClassName('hideBomb');
      for (let i = 0; i <= bombExplosion.length - 1; i++) {
        bombExplosion[i].classList.add('bomb');
      }
      lose();
    } else {
      this.classList.add('checked');
      this.removeEventListener('click', clickedCheck);
      counterPoints++;
      console.log(counterPoints);
      console.log(this.id);
    }
    win(numberBlackList.length, 16);
  }
}

// Funzione per generare un numero casuale univoco
function uniqueRandomNumber(min, max) {
  let randomNumber;
  let controlInList = false;
  while (!controlInList) {
    randomNumber = getRandomNumber(min, max);
    if (!numberBlackList.includes(randomNumber)) {
      numberBlackList.push(randomNumber);
      controlInList = true;
    }
  }
  return randomNumber;
}

// Numeri random generati con funzione
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Funzione con condizione quando la partita viene persa
function lose() {
  message.innerHTML = `HAI PERSO! Hai fatto ${counterPoints} punti su ${
    numberBlackList.length - 16
  }`;
  stopCondition = true;
  const freeze = document.getElementsByClassName('square');
  for (let i = 0; i < freeze.length; i++) {
    if (
      !freeze[i].classList.contains('checked') &&
      !freeze[i].classList.contains('bomb')
    ) {
      freeze[i].classList.add('freeze');
    }
  }
}

//Funzione con condizione per vincere la partita

function win(n, bomb) {
  if (counterPoints === n - bomb) {
    message.innerHTML = `SEI STATO DAVVERO FORTUNATO!! HAI  VINTO! HAI  TOTALIZZATO  ${counterPoints} PUNTI SU ${
      numberBlackList.length - 16
    }`;
  }
}

// Reset tutti i parametri clear
function clear() {
  container.innerHTML = '';
  numberBlackList = [];
  counterPoints = 0;
  message.innerHTML = '';
  stopCondition = false;
}

// Reset della funzione

function reset() {
  clear();

  choiceLevel.append(genBtnStart());
}
