class StatusBar extends DrawableObject {
  IMAGES_HEALTH = [
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png", //5th image
  ];

  IMAGES_BOTTLES = [
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png",
  ];

  IMAGES_COINS = [
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png",
  ];



  constructor(x, y, type) {
    super();
    this.type = type;
    this.loadImages(this.IMAGES_HEALTH);
    this.loadImages(this.IMAGES_BOTTLES);
    this.loadImages(this.IMAGES_COINS);

    this.y = y;
    this.x = x;
    this.width = 200;
    this.height = 60;

    if (type === "health") {
      this.setPercentage(100, type);
    } else if (type === "bottles") {
      this.setPercentage(0, type);
    } else if (type === "coins") {
      this.setPercentage(0, type);
    } 

    // this.setPercentage(100);
  }
  //setPercentage(50)
  setPercentage(percentage, type) {
    let images;
    this.percentage = percentage;
    // => 0...5
    if (type === "health") {
      images = this.IMAGES_HEALTH;
      let path = images[this.resolveImageIndex()];
      this.img = this.imageCache[path];
    }
    if (type === "bottles") {
      images = this.IMAGES_BOTTLES;
      let path = images[this.resolveImageIndex()];
      this.img = this.imageCache[path];
    }
    if (type === "coins") {
      images = this.IMAGES_COINS;
      let path = images[this.resolveImageIndex()];
      this.img = this.imageCache[path];
    }
    
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
