class CollectibleObject extends DrawableObject {
  // y = 330;
  width = 100;
  height = 100;
  offset = {
    top: 10,
    left: 25,
    right: 50,
    bottom: 20,
  };

  constructor(y, type) {
    super();
    if (type === "bottles") {
      this.loadImage("img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
      this.offset = {
    top: 10,
    left: 25,
    right: 50,
    bottom: 20,
  };
    } else if (type === "coins") {
      this.loadImage("img/8_coin/coin_1.png");
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
  }
}
