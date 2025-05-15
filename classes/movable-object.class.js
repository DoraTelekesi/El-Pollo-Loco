class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  energy = 100;
  lastHit = 0;
  broken = false;

  applyGravity() {
    setInterval(() => {
      if (!this.broken) {
        if (this.isAboveGround() || this.speedY > 0) {
          this.y -= this.speedY;
          this.speedY -= this.acceleration;
        } else {
          this.y = 180;
          this.speedY = 0;
        }
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    if (this instanceof ThrowableObject) {
      //Throwable object should always fall
      return true;
    } else {
      return this.y < 180;
    }
  }
  bounce() {
    if (this.canBounce) {
      this.speedY = +30;
      this.canBounce = false;
      setTimeout(() => {
        this.canBounce = true;
      }, 300);
    }
  }

  // character.isColliding(chicken);
  isColliding(mo) {
    return (
      this.x + this.width > mo.x && this.x < mo.x + mo.width && this.y < mo.y + mo.height && this.y + this.height > mo.y
    );
  }

  isCollidingFromAbove(mo) {
    let verticalCollision = this.y + this.height >= mo.y && this.y + this.height <= mo.y + mo.height;
    let horizontalCollision = this.x + this.width > mo.x && this.x < mo.x + mo.width;
    return verticalCollision && horizontalCollision;
  }

  isCollidingWithItem(mo) {
    return (
      this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
      this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    );
  }

  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit; //Difference in ms
    timepassed = timepassed / 1000; // Difference in s
    return timepassed < 1;
  }

  isDead() {
    return this.energy == 0;
  }

  playAnimation(images) {
    let i = this.currentImage % images.length; // let i = 6 % 6; 1, Rest 0 = >
    // i = 0, 1, 2, 3, 4, 5, 0
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
    if (images.length == 1) {
      let path = images[0];
      this.img = this.imageCache[path];
    }
  }

  moveRight() {
    if (!this.broken) {
      this.x += this.speed;
    }
  }

  moveLeft() {
    if (!this.broken) {
      this.x -= this.speed;
    }
  }
  jump() {
    this.speedY = 30;
  }
}
