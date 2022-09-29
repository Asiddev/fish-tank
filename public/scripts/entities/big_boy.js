class BigBoy extends Fish {

  constructor(options) {
    super(options)
    this.width = 100
    this.height = 150

    this.imageUri = '/images/shark.png';
  }
  onClick(event) {
    this.width = 550
    this.height = 450
    
  }
}
