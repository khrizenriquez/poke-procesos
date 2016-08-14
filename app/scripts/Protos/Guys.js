'use strict'

var Guys = function (posX, posY, image) {
	this.x 		= posX || 0
	this.y 		= posY || 0
	this.speed 	= 5
	this.img 	= window.location.href + `images/${image}.png`
}

Guys.prototype.randomGuys = function (size) {
	let i = 0, 
		s = size || 5
	for (i; i < size; i++) {
		guys.push(new Guys(0, 0, getRandomInt(1, 151)))
	}
}
