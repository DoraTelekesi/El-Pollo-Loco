class Chicken extends MovableObject {
  y = 350;
  height = 80;
  width = 80;
  energy = 5;
  broken = false;
  imageCache = {};
  IMAGES_WALKING_CHICKEN_1 = [
    "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  IMAGES_WALKING_CHICKEN_2 = [
    "img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
  ];

  IMAGE_DEAD_CHICKEN_1 = ["img/3_enemies_chicken/chicken_normal/2_dead/dead.png"];
  IMAGE_DEAD_CHICKEN_2 = ["img/3_enemies_chicken/chicken_small/2_dead/dead.png"];

  type = "";
  constructor(imagePath, type) {
    super().loadImage(imagePath);
    this.type = type;
    this.loadImages(this.IMAGES_WALKING_CHICKEN_1);
    this.loadImages(this.IMAGES_WALKING_CHICKEN_2);
    this.loadImages(this.IMAGE_DEAD_CHICKEN_1);
    this.loadImages(this.IMAGE_DEAD_CHICKEN_2);

    this.x = 500 + Math.random() * 2800;
    this.speed = 0.5 + Math.random() * 0.5;
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (!this.isDead()) {
        this.moveLeft();
        // console.log(this.y)
      }
    }, 1000 / 60);

    setInterval(() => {
      let images;
      if (this.type === "chicken-1") {
        if (this.isDead()) {
          images = this.IMAGE_DEAD_CHICKEN_1;
        } else {
          images = this.IMAGES_WALKING_CHICKEN_1;
        }
      } else if (this.type === "chicken-2") {
        if (this.isDead()) {
          images = this.IMAGE_DEAD_CHICKEN_2;
        } else {
          images = this.IMAGES_WALKING_CHICKEN_2;
        }
      }
      if (images) {
        this.playAnimation(images);
      }
    }, 100);
  }
}
