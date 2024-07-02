import Obstacle from "./Obstacle.js";
import Player from "./Player.js";

export default class Game {
  constructor() {
    this.startScreen = document.getElementById("start-screen");
    this.inGameScreen = document.getElementById("in-game-screen");
    this.player = new Player(this.inGameScreen);
    this.obstacles = [];
  }

  start() {
    this.startScreen.style.display = "none";
    this.inGameScreen.style.display = "block";
  }
}
