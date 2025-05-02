class Cloud extends MovableObject {
  y = 30;
  height = 500;
  constructor() {
    super().loadImage("img/5_background/layers/4_clouds/1.png");
    //   this.x = 200 + Math.random() * 500;
    this.width = 700;
    this.x = Math.random() * 500;
    this.animate();
  }
  animate() {
    this.moveLeft();
  }


}
