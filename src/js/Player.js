import Obstacle from "./Obstacle.js";

export default class Player {
  constructor(parentScreen) {
    this.parentScreen = parentScreen;
    this.element = document.createElement("img");
    this.element.src = "./src/assets/images/cow.png";
    this.element.id = "player";
    this.element.alt = "Player 1";
    this.parentScreen.appendChild(this.element);
    this.resetPosition();
    this.speed = 20;
    this.lives = 3;
    this.updateLifeCounter();
  }
  resetPosition() {
    this.x = (window.innerWidth - this.element.offsetWidth) / 2;
    this.y = window.innerHeight - this.element.offsetHeight - 10;
    this.updatePosition();
  }
  moveLeft() {
    this.x -= this.speed;
    if (this.x < 0) {
      this.x = 0;
    }
    this.updatePosition();
  }
  moveRight() {
    this.x += this.speed;
    if (this.x > window.innerWidth - this.element.offsetWidth) {
      this.x = window.innerWidth - this.element.offsetWidth;
    }
    this.updatePosition();
  }
  moveUp() {
    this.y -= this.speed;
    if (this.y < 0) {
      this.y = 0;
    }
    this.updatePosition();
  }
  moveDown() {
    this.y += this.speed;
    if (this.y > window.innerHeight - this.element.offsetHeight) {
      this.y = window.innerHeight - this.element.offsetHeight;
    }
    this.updatePosition();
  }
  updatePosition() {
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
  }
  updateLifeCounter() {
    console.log(`Lives remaining: ${this.lives}`);
  }

  checkCollision(obstacles) {
    obstacles.forEach((obstacle) => {
      const rect1 = this.element.getBoundingClientRect();
      const rect2 = obstacle.element.getBoundingClientRect();

      const isColliding = !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
      );

      if (isColliding) {
        this.lives--;
        this.updateLifeCounter();
        this.resetPosition();
        if (this.lives <= 0) {
          alert("Game over!");
          this.lives = 3;
          this.updateLifeCounter();
        }
      }
    });
  }
}

// const imageElement = document.getElementById("movable");
// const playerOne = new Player(imageElement);

// function handleKeyPress(event) {
//   switch (event.key) {
//     case "ArrowLeft":
//       playerOne.moveLeft();
//       break;
//     case "ArrowRight":
//       playerOne.moveRight();
//       break;
//     case "ArrowUp":
//       playerOne.moveUp();
//       break;
//     case "ArrowDown":
//       playerOne.moveDown();
//       break;
//   }
// }
// function gameLoop() {
//   obstacles.forEach((obstacle) => obstacle.move());
//   playerOne.checkCollision();
//   requestAnimationFrame(gameLoop);
// }
// window.addEventListener("keydown", handleKeyPress);
// gameLoop();
