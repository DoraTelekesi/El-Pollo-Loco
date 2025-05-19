class Endboss extends MovableObject {
  height = 500;
  width = 300;
  y = -35;
  energy = 20;
  world;
  gameWon = false;

  IMAGES_WALKING = [
    "img/4_enemie_boss_chicken/1_walk/G1.png",
    "img/4_enemie_boss_chicken/1_walk/G2.png",
    "img/4_enemie_boss_chicken/1_walk/G3.png",
    "img/4_enemie_boss_chicken/1_walk/G4.png",
    "img/4_enemie_boss_chicken/2_alert/G5.png",
    "img/4_enemie_boss_chicken/2_alert/G6.png",
    "img/4_enemie_boss_chicken/2_alert/G7.png",
    "img/4_enemie_boss_chicken/2_alert/G8.png",
    "img/4_enemie_boss_chicken/2_alert/G9.png",
    "img/4_enemie_boss_chicken/2_alert/G10.png",
    "img/4_enemie_boss_chicken/2_alert/G11.png",
    "img/4_enemie_boss_chicken/2_alert/G12.png",
    "img/4_enemie_boss_chicken/3_attack/G13.png",
    "img/4_enemie_boss_chicken/3_attack/G14.png",
    "img/4_enemie_boss_chicken/3_attack/G15.png",
    "img/4_enemie_boss_chicken/3_attack/G16.png",
    "img/4_enemie_boss_chicken/3_attack/G17.png",
    "img/4_enemie_boss_chicken/3_attack/G18.png",
    "img/4_enemie_boss_chicken/3_attack/G19.png",
    "img/4_enemie_boss_chicken/3_attack/G20.png",
  ];

  IMAGES_HURT = [
    "img/4_enemie_boss_chicken/4_hurt/G21.png",
    "img/4_enemie_boss_chicken/4_hurt/G22.png",
    "img/4_enemie_boss_chicken/4_hurt/G23.png",
  ];

  IMAGES_DEAD = [
    "img/4_enemie_boss_chicken/5_dead/G24.png",
    "img/4_enemie_boss_chicken/5_dead/G25.png",
    "img/4_enemie_boss_chicken/5_dead/G26.png",
  ];

  constructor(world) {
    super().loadImage(this.IMAGES_WALKING[0]);
    this.world = world;
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 3500;
    this.speed = 0.5;
    this.animate();
  }

  animate() {
    this.setStoppableInterval(() => {
      if (this.isDead()) {
        this.playAnimation(this.IMAGES_DEAD);
        if (!this.gameWon) {
          this.gameWon = true;
          this.world.movableObjects.forEach((obj) => obj.stopInterval());
          setTimeout(() => {
            document.getElementById("win-modal").classList.remove("hidden");
            document.getElementById("overlay").classList.remove("hidden");
            AUDIO_BACKGROUND.pause();
            AUDIO_WIN.play();
          }, 1000);
        }
      } else if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT);
        AUDIO_BOSS.play();
      }
    }, 160);

    this.setStoppableInterval(() => {
      if (!this.isHurt() && !this.isDead()) {
        this.playAnimation(this.IMAGES_WALKING);
        this.moveLeft();
      }
    }, 200);
    this.setStoppableInterval(() => {
      this.moveLeft();
    }, 1000 / 25);
  }
}
