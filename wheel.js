class Wheel {
	constructor() {
		this.wheelElements = [];
    this.currentWheelElement = this.wheelElements[0]
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
    $('.value-display').text('SPIN VALUE: ' + wheel.currentWheelElement);
    }
 }

if (typeof module !== 'undefined') {
  module.exports = Wheel;
}