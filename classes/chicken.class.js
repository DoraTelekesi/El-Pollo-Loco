class Chicken extends MovableObject {
  y = 350;
  height = 80;
  width = 80;
  energy = 5;
  broken = false;
  imageCache = {};
  speedY = 0;
  acceleration = 0.08;
  world;
  hasToTurn = false;
  intervalIds = [];
  i = 1;

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
    if (this.type == "chicken-2" && !this.isDead() && !this.isAboveGround()) {
      this.applyGravity();
    }
  }

  animate() {
    this.setStoppableInterval(() => {
      if (!this.otherDirection) {
        if (this.x > 20) {
          this.moveLeft();
        } else {
          this.otherDirection = true;
        }
      } else {
        if (this.x < 2500) {
          // Set your right boundary here
          this.moveRight();
        } else {
          this.otherDirection = false;
        }
      }
    }, 1000 / 60);

    this.setStoppableInterval(() => {
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
