class ThrowableObject extends MovableObject {
  ROTATING_BOTTLES = [
    "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  SPLASHING_BOTTLES = [
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
  ];
  broken = false;
  constructor(x, y) {
    super().loadImage("img/6_salsa_bottle/salsa_bottle.png");
    this.loadImages(this.ROTATING_BOTTLES);
    this.loadImages(this.SPLASHING_BOTTLES);
    this.x = x;
    this.y = y;
    this.height = 60;
    this.width = 50;
    this.throw();
  }

  throw() {
    this.applyGravity();
    this.speedY = 25;
    const horizontalMovement = setInterval(() => {
      if (!this.broken) {
        this.x += 5;
      } else {
        clearInterval(horizontalMovement);
      }
    }, 25);

    setInterval(() => {
      if (this.broken) {
        this.playAnimation(this.SPLASHING_BOTTLES);
      } else {
        this.playAnimation(this.ROTATING_BOTTLES);
      }
    }, 100);
  }
}
