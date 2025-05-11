class World {
  character = new Character();
  level = level1;
  ctx;
  canvas;
  type;
  keyboard;
  camera_x = 0;
  throwableObject = [];
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }
  amountBottle = 0;
  amountCoin = 0;

  setWorld() {
    this.character.world = this;
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowObject();
      this.checkCollisionWithItem();
      this.checkCollisionsItemsWithEnemy();
    }, 200);
  }
  checkThrowObject() {
    if (this.keyboard.D) {
      if (this.amountBottle > 0) {
        let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
        this.throwableObject.push(bottle);
        this.amountBottle--;
        this.level.statusBar[1].setPercentage((this.amountBottle * 100) / 10, "bottles");
      } else {
        console.log("no bottles to throw");
      }
    }
  }
  checkCollisionWithItem() {
    this.level.collectibleObjects = this.level.collectibleObjects.filter((item) => {
      if (this.character.isCollidingWithItem(item)) {
        if (item.type == "bottles") {
          this.amountBottle++;
          this.level.statusBar[1].setPercentage((this.amountBottle * 100) / 10, "bottles");
        } else if (item.type == "coins") {
          this.amountCoin++;
          this.level.statusBar[2].setPercentage((this.amountCoin * 100) / 10, "coins");
        }

        return false; // Remove the item from the array
      }
      return true; // Keep the item in the array
    });
  }
  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        this.level.statusBar[0].setPercentage(this.character.energy, "health");
      }
    });
  }

  checkCollisionsItemsWithEnemy() {
    this.level.enemies.forEach((enemy) => {
      this.throwableObject.forEach((item) => {
        if (enemy.isColliding(item)) {
          enemy.hit();
          item.broken = true;
          if (enemy instanceof Endboss) {
            this.level.statusBarEndboss[0].setPercentage((enemy.energy * 100) / 20);
            this.removeItem(enemy);
          } else {
            this.removeItem(enemy);
            this.removeEnemy(item);
          }
        }
      });
    });
  }
  removeItem(enemy) {
    setTimeout(() => {
      this.throwableObject = this.throwableObject.filter((item) => {
        if (enemy.isColliding(item)) {
          return false;
        } else {
          return true;
        }
      });
    }, 140);
  }
  removeEnemy(item) {
    setTimeout(() => {
      this.level.enemies = this.level.enemies.filter((enemy) => {
        if (enemy.isColliding(item)) {
          return false;
        } else {
          return true;
        }
      });
    }, 200);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);
    this.ctx.translate(-this.camera_x, 0); //Back
    //Space for fixed object
    this.addObjectsToMap(this.level.statusBar);
    this.ctx.translate(this.camera_x, 0); // Forwards

    this.addToMap(this.character);

    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.statusBarEndboss);
    this.addObjectsToMap(this.throwableObject);
    this.addObjectsToMap(this.level.collectibleObjects);
    this.ctx.translate(-this.camera_x, 0);
    // Draw() wird immer wieder aufgerufen
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);
    mo.drawFrameOffset(this.ctx);

    if (mo.otherDirection) {
      this.flipimageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }
  flipimageBack(mo) {
    this.ctx.restore();
    mo.x = mo.x * -1;
  }
}
