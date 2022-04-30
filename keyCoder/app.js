const codeKey = document.querySelector('.keycode');
const key = document.querySelector('.key');
const kek = document.querySelector('.kek-img');

function keyPressed(e) {
  codeKey.innerHTML = e.keyCode;
  key.innerHTML = e.key;
  key.classList.add('key-pressed');
  e.keyCode === 32 ? (key.innerHTML = 'Spacebar') : '';
}

window.addEventListener('keydown', keyPressed);
