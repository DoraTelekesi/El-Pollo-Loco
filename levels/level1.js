let level1;
function initLevel() {
  level1 = new Level(
    [
      new Chicken("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png", "chicken-1"),
      new Chicken("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png", "chicken-2"),
      new Chicken("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png", "chicken-1"),
      new Chicken("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png", "chicken-2"),
      new Chicken("img/3_enemies_chicken/chicken_small/1_walk/1_w.png", "chicken-1"),
      new Chicken("img/3_enemies_chicken/chicken_small/1_walk/1_w.png", "chicken-2"),
      new Chicken("img/3_enemies_chicken/chicken_small/1_walk/1_w.png", "chicken-1"),
    ],
    [
      new Cloud("img/5_background/layers/4_clouds/1.png", 0),
      new Cloud("img/5_background/layers/4_clouds/2.png", 739),
      new Cloud("img/5_background/layers/4_clouds/1.png", 739 * 2),
      new Cloud("img/5_background/layers/4_clouds/2.png", 739 * 3),
      new Cloud("img/5_background/layers/4_clouds/1.png", 739 * 4),
      new Cloud("img/5_background/layers/4_clouds/2.png", 739 * 5),
    ],
    [
      new BackgroundObject("img/5_background/layers/air.png", -739),
      new BackgroundObject("img/5_background/layers/3_third_layer/2.png", -739),
      new BackgroundObject("img/5_background/layers/2_second_layer/2.png", -739),
      new BackgroundObject("img/5_background/layers/1_first_layer/2.png", -739),

      new BackgroundObject("img/5_background/layers/air.png", 0),
      new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 0),
      new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 0),
      new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 0),

      new BackgroundObject("img/5_background/layers/air.png", 739),
      new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 739),
      new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 739),
      new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 739),

      new BackgroundObject("img/5_background/layers/air.png", 739 * 2),
      new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 739 * 2),
      new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 739 * 2),
      new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 739 * 2),

      new BackgroundObject("img/5_background/layers/air.png", 739 * 3),
      new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 739 * 3),
      new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 739 * 3),
      new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 739 * 3),

      new BackgroundObject("img/5_background/layers/air.png", 739 * 4),
      new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 739 * 4),
      new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 739 * 4),
      new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 739 * 4),

      new BackgroundObject("img/5_background/layers/air.png", 739 * 5),
      new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 739 * 5),
      new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 739 * 5),
      new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 739 * 5),
    ],
    [
      new CollectibleObject(330, "bottles"),
      new CollectibleObject(330, "bottles"),
      new CollectibleObject(330, "bottles"),
      new CollectibleObject(330, "bottles"),
      new CollectibleObject(330, "bottles"),
      new CollectibleObject(330, "bottles"),
      new CollectibleObject(330, "bottles"),
      new CollectibleObject(330, "bottles"),
      new CollectibleObject(330, "bottles"),
      new CollectibleObject(330, "bottles"),
      new CollectibleObject(170, "coins"),
      new CollectibleObject(170, "coins"),
      new CollectibleObject(170, "coins"),
      new CollectibleObject(170, "coins"),
      new CollectibleObject(170, "coins"),
      new CollectibleObject(170, "coins"),
      new CollectibleObject(170, "coins"),
      new CollectibleObject(170, "coins"),
      new CollectibleObject(170, "coins"),
      new CollectibleObject(170, "coins"),
    ],
    [new StatusBar(20, 20, "health"), new StatusBar(20, 70, "bottles"), new StatusBar(20, 120, "coins")],
    [new StatusBarEndboss()]
  );
}
