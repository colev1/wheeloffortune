class Wheel {
	constructor() {
		this.wheelElements = [];
    this.currentWheelElement = this.wheelElements[0];
	}
	
  generateWheelValues() {
    let wheelArray = data.wheel;
    let randomizedWheelArray = wheelArray.sort(() => 
      Math.random() - 0.5);
    this.wheelElements = randomizedWheelArray.splice(1, 10);
    return this.wheelElements;
  }

  spinNewWheel() {
    let newValue = Math.round(Math.random() * 9);
    this.currentWheelElement = this.wheelElements[newValue];
    return this.currentWheelElement;
	}

  displayWheelValue() {
    $('.value-display').text('Spin Value: ' + wheel.currentWheelElement);
    }
 
  generateBonusWheel() {
    this.wheelElements = [
      20000,
      'A NEW CAR',
      15000,
      'A TURING CERTIFICATE',
      5000,
      'A NEW BEDROOM SET',
      100000,
      'VIKING RIVER CRUISE',
      10000,
      'A NEW HOUSE'
      ];
      return this.wheelElements;
  }   
}

if (typeof module !== 'undefined') {
  module.exports = Wheel;
}