class Character extends MovableObject {
  x = 100;
  y = 180;
  speed = 10;
  height = 250;
  width = 100;
  broken = false;
  world;
  offset = {
    top: 70,
    left: 25,
    right: 50,
    bottom: 80,
  };
  shouldBounce = false;
  gameFailed = false;
  isSleeping = false;
  standingTimer = null;
  isLongStanding = false;

  IMAGES_STADING = [
    "img/2_character_pepe/1_idle/idle/I-1.png",
    "img/2_character_pepe/1_idle/idle/I-2.png",
    "img/2_character_pepe/1_idle/idle/I-3.png",
    "img/2_character_pepe/1_idle/idle/I-4.png",
    "img/2_character_pepe/1_idle/idle/I-5.png",
    "img/2_character_pepe/1_idle/idle/I-6.png",
    "img/2_character_pepe/1_idle/idle/I-7.png",
    "img/2_character_pepe/1_idle/idle/I-8.png",
    "img/2_character_pepe/1_idle/idle/I-9.png",
    "img/2_character_pepe/1_idle/idle/I-10.png",
  ];
  IMAGES_LONG_STANDING = [
    "img/2_character_pepe/1_idle/long_idle/I-11.png",
    "img/2_character_pepe/1_idle/long_idle/I-12.png",
    "img/2_character_pepe/1_idle/long_idle/I-13.png",
    "img/2_character_pepe/1_idle/long_idle/I-14.png",
    "img/2_character_pepe/1_idle/long_idle/I-15.png",
    "img/2_character_pepe/1_idle/long_idle/I-16.png",
    "img/2_character_pepe/1_idle/long_idle/I-17.png",
    "img/2_character_pepe/1_idle/long_idle/I-18.png",
    "img/2_character_pepe/1_idle/long_idle/I-19.png",
    "img/2_character_pepe/1_idle/long_idle/I-20.png",
  ];
  IMAGES_WALKING = [
    "img/2_character_pepe/2_walk/W-21.png",
    "img/2_character_pepe/2_walk/W-22.png",
    "img/2_character_pepe/2_walk/W-23.png",
    "img/2_character_pepe/2_walk/W-24.png",
    "img/2_character_pepe/2_walk/W-25.png",
    "img/2_character_pepe/2_walk/W-26.png",
  ];
  IMAGES_JUMPING = [
    "img/2_character_pepe/3_jump/J-31.png",
    "img/2_character_pepe/3_jump/J-32.png",
    "img/2_character_pepe/3_jump/J-33.png",
    "img/2_character_pepe/3_jump/J-34.png",
    "img/2_character_pepe/3_jump/J-35.png",
    "img/2_character_pepe/3_jump/J-36.png",
    "img/2_character_pepe/3_jump/J-37.png",
    "img/2_character_pepe/3_jump/J-38.png",
    "img/2_character_pepe/3_jump/J-39.png",
  ];
  IMAGES_DEAD = [
    "img/2_character_pepe/5_dead/D-51.png",
    "img/2_character_pepe/5_dead/D-52.png",
    "img/2_character_pepe/5_dead/D-53.png",
    "img/2_character_pepe/5_dead/D-54.png",
    "img/2_character_pepe/5_dead/D-55.png",
    "img/2_character_pepe/5_dead/D-56.png",
    "img/2_character_pepe/5_dead/D-57.png",
  ];

  IMAGES_HURT = [
    "img/2_character_pepe/4_hurt/H-41.png",
    "img/2_character_pepe/4_hurt/H-42.png",
    "img/2_character_pepe/4_hurt/H-43.png",
  ];

  constructor() {
    super().loadImage("img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_STADING);
    this.loadImages(this.IMAGES_LONG_STANDING);
    this.animate();
    this.applyGravity();
    this.canBounce = true;
  }

  navigateCharacter() {
    this.setStoppableInterval(() => {
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
      }
      if (this.world.keyboard.LEFT && this.x > 0) {
        this.moveLeft();
        this.otherDirection = true;
      }
      if (this.world.keyboard.UP && !this.isAboveGround()) {
        this.jump();
        AUDIO_JUMP.play();
      }
      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);
  }

  animate() {
    this.navigateCharacter();
    this.setStoppableInterval(() => {
      this.handleStandingReset();
      if (this.isHurt()) return this.handleHurt();
      if (this.isDead() && !this.gameFailed) return this.handleDeath();
      if (this.isAboveGround()) return this.handleJump();
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) return this.handleWalk();
      this.handleStanding();
    }, 100);
  }

  handleDeath() {
    this.gameFailed = true;
    this.playAnimation(this.IMAGES_DEAD);

    // Stop all movable objects
    console.log(this.world.movableObjects);
    this.world.movableObjects.forEach((obj) => obj.stopInterval());
    setTimeout(() => {
      document.getElementById("fail-modal").classList.remove("hidden");
      document.getElementById("overlay").classList.remove("hidden");
      AUDIO_BACKGROUND.pause();
      AUDIO_FAIL.play();
    }, 50);
  }

  handleJump() {
    this.playAnimation(this.IMAGES_JUMPING);
    AUDIO_RUN.pause();
  }
  handleWalk() {
    this.playAnimation(this.IMAGES_WALKING);
    AUDIO_RUN.play();
  }
  handleHurt() {
    this.playAnimation(this.IMAGES_HURT);
    AUDIO_HURT.play();
    AUDIO_RUN.pause();
  }

  handleStanding() {
    if (!this.isLongStanding) {
      this.playAnimation(this.IMAGES_STADING);
      if (!this.standingTimer) {
        this.standingTimer = setTimeout(() => {
          this.playAnimation(this.IMAGES_LONG_STANDING);
          if (!this.world.gameWon) {
            AUDIO_SNORE.play();
          }
          this.isLongStanding = true;
        }, 3000);
      }
    } else {
      this.playAnimation(this.IMAGES_LONG_STANDING);
    }
    AUDIO_RUN.pause();
  }

  handleStandingReset() {
    if (
      this.isHurt() ||
      this.isDead() ||
      this.isAboveGround() ||
      this.world.keyboard.RIGHT ||
      this.world.keyboard.LEFT ||
      this.world.keyboard.UP ||
      this.world.gameWon
    ) {
      if (this.standingTimer) {
        clearTimeout(this.standingTimer);
        this.standingTimer = null;
      }
      if (this.isLongStanding) {
        AUDIO_SNORE.pause();
        AUDIO_SNORE.currentTime = 0;
      }
      this.isLongStanding = false;
    }
  }
}
