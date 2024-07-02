export default class Obstacle {
  constructor(element) {
    this.element = element;
    this.resetPosition();
    this.speed = Math.random() * 3 + 2;
  }
  resetPosition() {
    this.y = Math.random() * window.innerHeight - this.element.offsetHeight;
    this.x =
      Math.random() > 0.5 ? 0 : window.innerWidth - this.element.offsetWidth;
    this.direction = this.x === 0 ? 1 : -1;
    this.updatePosition();
  }
  move() {
    this.x += this.speed * this.direction;
    this.updatePosition();

    if (this.x < -this.element.offsetWidth || this.x > window.innerWidth) {
      this.resetPosition();
    }
  }
  updatePosition() {
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
  }
}
