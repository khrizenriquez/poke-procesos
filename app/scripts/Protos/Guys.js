'use strict'

var Guys = function (posX, posY, image) {
	this.x 		= posX
	this.y 		= posY
	this.speed 	= 5
	this.img 	= window.location.href + `images/${image}.png`
}

Guys.prototype.drawGuy = function() {
}
