class Keyboard {
  LEFT = false;
  RIGHT = false;
  UP = false;
  DOWN = false;
  SPACE = false;
  D = false;

  constructor() {
    this.bindBtnPressEvent();
  }

  bindBtnPressEvent() {
    document.getElementById("btn-left-resp").addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.LEFT = true;
    });
    document.getElementById("btn-right-resp").addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.RIGHT = true;
    });
    document.getElementById("btn-jump-resp").addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.UP = true;
    });
    document.getElementById("btn-throw-resp").addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.D = true;
    });
    document.getElementById("btn-left-resp").addEventListener("touchend", (e) => {
      e.preventDefault();
      this.LEFT = false;
    });
    document.getElementById("btn-right-resp").addEventListener("touchend", (e) => {
      e.preventDefault();
      this.RIGHT = false;
    });
    document.getElementById("btn-jump-resp").addEventListener("touchend", (e) => {
      e.preventDefault();
      this.UP = false;
    });
    document.getElementById("btn-throw-resp").addEventListener("touchend", (e) => {
      e.preventDefault();
      this.D = false;
    });
  }
}
