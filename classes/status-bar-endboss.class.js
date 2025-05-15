class StatusBarEndboss extends MovableObject {
  otherDirection = false;
  IMAGES_ENDBOSS_HEALTH = [
    "img/7_statusbars/2_statusbar_endboss/blue/blue0.png",
    "img/7_statusbars/2_statusbar_endboss/blue/blue20.png",
    "img/7_statusbars/2_statusbar_endboss/blue/blue40.png",
    "img/7_statusbars/2_statusbar_endboss/blue/blue60.png",
    "img/7_statusbars/2_statusbar_endboss/blue/blue80.png",
    "img/7_statusbars/2_statusbar_endboss/blue/blue100.png",
  ];
  percentage;

  constructor() {
    super();

    this.loadImages(this.IMAGES_ENDBOSS_HEALTH);
    this.y = 20;
    this.x = 3600;

    this.width = 200;
    this.height = 60;
    this.setPercentage(100);
    this.speed = 0.5;
    this.animate();
  }
  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 25);
  }
  //setPercentage(50)
  setPercentage(percentage) {
    let images;
    this.percentage = percentage;
    images = this.IMAGES_ENDBOSS_HEALTH;
    let path = images[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
