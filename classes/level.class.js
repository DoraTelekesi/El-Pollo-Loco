class Level {
  enemies;
  clouds;
  backgroundObjects;
  collectibleObjects;
  statusBar;
  statusBarEndboss;
  level_begin_x = 10;
  level_end_x = 3300;
  constructor(enemies, clouds, backgroundObjects, collectibleObjects, statusBar, statusBarEndboss) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.backgroundObjects = backgroundObjects;
    this.collectibleObjects = collectibleObjects;
    this.statusBar = statusBar;
    this.statusBarEndboss = statusBarEndboss;
  }
}
