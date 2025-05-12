class CollectibleObject extends MovableObject {
  // y = 330;
  width = 100;
  height = 100;
  offset = {
    top: 10,
    left: 25,
    right: 50,
    bottom: 20,
  };

  IMAGES_BOTTLE = [
    "img/6_salsa_bottle/1_salsa_bottle_on_ground.png",
    "img/6_salsa_bottle/2_salsa_bottle_on_ground.png",
  ];
  IMAGES_COIN = ["img/8_coin/coin_1.png", "img/8_coin/coin_2.png"];

  constructor(y, type) {
    

    if (type === "bottles") {
      super().loadImage("img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
      this.loadImages(this.IMAGES_BOTTLE);
      this.offset = {
        top: 10,
        left: 25,
        right: 50,
        bottom: 20,
      };
    } else if (type === "coins") {
      super().loadImage("img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
      this.loadImages(this.IMAGES_COIN);
      this.offset = {
        top: 20,
        left: 25,
        right: 50,
        bottom: 40,
      };
    }
    this.y = y;
    this.type = type;
    this.x = 200 + Math.random() * 3000;
    this.animate();
  }

  animate() {
    setInterval(() => {
      let images;
      if (this.type === "bottles") {
        images = this.IMAGES_BOTTLE;
      }
      if (this.type === "coins") {
        images = this.IMAGES_COIN;
      }
      if (images) {
        this.playAnimation(images);
      }
    }, 400);
  }
}
