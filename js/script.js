const container = document.querySelector('.container');
const choiceLevel = document.querySelector('.choice-level');
const chooseLevel = document.getElementById('stages');

reset();

function init(stage, n) {
  for (let i = 1; i <= n; i++) {
    const square = genSquare(i);
    square.classList.add(stage);

    // Clicca sul quadrato e con metodo stampato in console ci permetterà di vedere quante volte clicchiamo su un determinato quadrato con relativo counter
    square.addEventListener('click', function () {
      console.log(this.id);
      this.classList.toggle('checked');
    });

    container.append(square);
  }
}

//Bottore Start & Select Level
function genBtnStart() {
  const btn = document.createElement('button');
  btn.className = 'btn-play';
  btn.innerHTML = 'Start';

  btn.addEventListener('click', function () {
    container.innerHTML = '';
    if (chooseLevel.value === 'facile') {
      init('facile', 100);
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
  return newSquare;
}

// Reset della funzione

function reset() {
  container.innerHTML = '';
  choiceLevel.append(genBtnStart());
}
