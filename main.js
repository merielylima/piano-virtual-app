// get all keys
const keys = document.querySelectorAll(".key")

function playNote(event) {
  
  let audioKeyCode = getKeyCode(event);

  // typed or pressed key
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

  // if key exists
  const cantFoundAnyKey = !key

  if(cantFoundAnyKey) {
    return;
  }

  addPlayingClass(key)
  playAudio(audioKeyCode)
}

function addPlayingClass(key) {
  key.classList.add('playing')
}

function getKeyCode(event) {
  let keyCode;

  const isKeyboard = event.type === "keydown"
  if(isKeyboard) {
    keyCode = event.keyCode
  } else {
    keyCode = event.target.dataset.key
  }

  return keyCode
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
  audio.currentTime = 0;
  audio.play()
}

function removePlayingClass(event) {
  event.target.classList.remove("playing")
}

function registerEvents() {
  // click with mouse
  keys.forEach( function(key) {
    key.addEventListener("click", playNote)
    key.addEventListener("transitionend", removePlayingClass)
  })

  // keyboard type
  window.addEventListener("keydown", playNote)
}
window.addEventListener("load", registerEvents)

var tecladoVisivel = false;
function mostrarTeclado(){
  var keyboard = document.getElementsByClassName("keyboard");
  var index;
  for (index = 0; index < keyboard.length; index++) {
    var keyShow = keyboard[index];
    if (tecladoVisivel == false){
      keyShow.classList.remove("keys-hidden");
      keyShow.classList.add("keys-display");
    }
    else{
      keyShow.classList.remove("keys-display");
      keyShow.classList.add("keys-hidden");
    }
  } 
  tecladoVisivel = !tecladoVisivel;
}

let size = 13;

const btn = document.querySelectorAll('.button');

btn.forEach(function(button) {
  button.addEventListener('click', function(e) {

    button.classList.contains('plus') ? size = size + 2 : size = size - 2;
      
    document.documentElement.style.setProperty('--size', `${size}px`);
  });
});

const fullScreenButton = document.querySelector(".fullscreen");
fullScreenButton.addEventListener("click", (event) => {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
      if (document.exitFullscreen) {
          document.exitFullscreen();
      }
  }
});