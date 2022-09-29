class FastBoy extends GoFish {

  constructor(options) {
    super(options)
    this.imageUri = '/images/fastboy.jpg';
    this.width = 150
    this.height = 150
  }
  onClick(event) {
    this.maxSurge = 3.0;
    this.surgMult = 5.0;
  }
  updateOneTick() {
    var delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S * (1 + this.surgeSecondsLeft * this.surgMult));
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity();
    }
    this.surgeSecondsLeft = Math.max(0, this.surgeSecondsLeft - PHYSICS_TICK_SIZE_S);
  }


  onClick(event) {
    this.surgeSecondsLeft = this.maxSurge;
  }
}
