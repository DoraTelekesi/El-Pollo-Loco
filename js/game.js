let canvas;
let world;
let keyboard = new Keyboard();
let fullscreen = false;

let AUDIO_BACKGROUND = new Audio("./audio/mexican-music.mp3");
let AUDIO_JUMP = new Audio("./audio/jump.mp3");
let AUDIO_COLLECT_COIN = new Audio("./audio/collect-coin.mp3");
let AUDIO_COLLECT_BOTTLE = new Audio("./audio/glass-bottle-clink.mp3");
let AUDIO_HURT = new Audio("./audio/hurt.mp3");
let AUDIO_SMASH_BOTTLE = new Audio("./audio/glass-bottle-smash.mp3");
let AUDIO_FAIL = new Audio("./audio/dead.mp3");
let AUDIO_SPLAT = new Audio("./audio/splat.mp3");
let AUDIO_SNORE = new Audio("./audio/sleep.mp3");
let AUDIO_WHOOSH = new Audio("./audio/whoosh.mp3");
let AUDIO_RUN = new Audio("./audio/run.mp3");
let AUDIO_BOSS = new Audio("./audio/chicken-noise.mp3");
let AUDIO_WIN = new Audio("./audio/win.mp3");
AUDIO_BACKGROUND.loop = true;
AUDIO_BACKGROUND.volume = 0.1;

function startGame() {
  initLevel();
  document.getElementById("opening-modal").classList.add("dp-none");
  document.getElementById("overlay").classList.add("hidden");
  document.getElementById("canvas-icons").classList.remove("hidden");
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  // AUDIO_BACKGROUND.play();
}

function restartGame() {
  window.location.reload();
}

function init() {
  document.getElementById("canvas-icons").classList.add("hidden");
  document.getElementById("overlay").classList.add("hidden");
}

function goFullScreen() {
  let canvasContainer = document.getElementById("canvas-container");
  if (fullscreen == false) {
    enterFullScreen(canvasContainer);
    fullscreen = true;
    document.getElementById("fullscreen").src = "img/icons/compress-solid.svg";
  } else if (fullscreen == true) {
    exitfullscreen();
    fullscreen = false;
    document.getElementById("fullscreen").src = "img/icons/expand-solid.svg";
  }
}

// Enter fullscreen
function enterFullScreen(element) {
  if (element.RequestFullScreen) {
    element.RequestFullScreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else {
    alert("This browser doesn't supporter fullscreen");
  }
}

// Exit fullscreen
function exitfullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else {
    alert("Exit fullscreen doesn't work");
  }
}
window.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = true;
  }
  if (e.keyCode == 37) {
    keyboard.LEFT = true;
  }
  if (e.keyCode == 38) {
    keyboard.UP = true;
  }
  if (e.keyCode == 40) {
    keyboard.DOWN = true;
  }
  if (e.keyCode == 32) {
    keyboard.SPACE = true;
  }
  if (e.keyCode == 68) {
    keyboard.D = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = false;
  }
  if (e.keyCode == 37) {
    keyboard.LEFT = false;
  }
  if (e.keyCode == 38) {
    keyboard.UP = false;
  }
  if (e.keyCode == 40) {
    keyboard.DOWN = false;
  }
  if (e.keyCode == 42) {
    keyboard.SPACE = false;
  }
  if (e.keyCode == 68) {
    keyboard.D = false;
  }
});

function openInstructions() {
  document.getElementById("instructions").classList.remove("hidden");
}

function closeInstructions() {
  document.getElementById("instructions").classList.add("hidden");
}

function preventBubbling(event) {
  event.stopPropagation();
}

function openImpressum() {
  document.getElementById("impressum-modal").classList.remove("hidden");
}

function closeImpressum() {
  document.getElementById("impressum-modal").classList.add("hidden");
}

function toggleMusic() {
  const musicIcon = document.getElementById("music-on");
  if (musicIcon.classList.contains("music-on")) {
    musicIcon.classList.remove("music-on");
    musicIcon.classList.add("music-off");
    musicIcon.src = "img/icons/volume-xmark-solid.svg";
    AUDIO_BACKGROUND.muted = true;
    AUDIO_BACKGROUND.pause();
  } else {
    musicIcon.classList.remove("music-off");
    musicIcon.classList.add("music-on");
    musicIcon.src = "img/icons/volume-high-solid.svg";
    AUDIO_BACKGROUND.muted = false;
    AUDIO_BACKGROUND.play();
  }
}
