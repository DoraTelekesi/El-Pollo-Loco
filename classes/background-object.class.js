class BackgroundObject extends MovableObject {
  width = 740;
  height = 480;
  constructor(imagePath, x, y) {
    super().loadImage(imagePath);
    this.y = 480 - this.height; // 480 (height of the canvas) - 400
    this.x = x;
  }
}
