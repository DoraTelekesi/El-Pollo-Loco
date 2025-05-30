class DrawableObject {
  img;
  imageCache = {};
  currentImage = 0;
  y = 270;
  x = 120;
  height = 150;
  width = 100;
  offset = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  /**
   *
   * @param {Array} arr ['img/image1.png', 'img/image2.png',...]
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }
  // loadImage('img/test.png)
  loadImage(path) {
    this.img = new Image();
    this.img.src = path; // this.img = document.getElementById("image") <img id="image" src="">
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawFrame(ctx) {
    if (this instanceof Character || this instanceof Chicken || this instanceof Endboss) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }

  drawFrameOffset(ctx) {
    if (
      this instanceof Character ||
      this instanceof Chicken ||
      this instanceof CollectibleObject ||
      this instanceof Endboss ||
      this instanceof ThrowableObject
    ) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "red";
      ctx.rect(
        this.x + this.offset.left,
        this.y + this.offset.top,
        this.width - this.offset.right,
        this.height - this.offset.bottom
      );
      ctx.stroke();
    }
  }
}
