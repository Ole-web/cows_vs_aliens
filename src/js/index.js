import Game from "./Game.js";

let game;
const startGameButton = document.querySelector("#start-game-button");
startGameButton.addEventListener("click", () => {
  game = new Game();
  game.start();
});

window.addEventListener("keydown", handleKeyPress);
function handleKeyPress(event) {
  switch (event.key) {
    case "ArrowLeft":
      game.player.moveLeft();
      break;
    case "ArrowRight":
      game.player.moveRight();
      break;
    case "ArrowUp":
      game.player.moveUp();
      break;
    case "ArrowDown":
      game.player.moveDown();
      break;
  }
}
