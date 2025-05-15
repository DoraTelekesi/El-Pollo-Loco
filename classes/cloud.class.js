class Cloud extends MovableObject {
  y = 10;
  height = 500;
  speed = 0.6;

  constructor(imagePath, x) {
    super().loadImage(imagePath);
    this.width = 700;
    this.x = x;
    this.animate();
  }
  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 25);
  }
}
