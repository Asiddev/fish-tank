class SwitchFish extends Fish {
  constructor(options) {
    this.imageUri = '/images/bluefish.png';
  }

  onClick(event) {
    this.makeNewVelocity(50);
  }
}
