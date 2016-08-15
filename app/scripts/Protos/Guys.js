'use strict'

var Guys = function (posX, posY, image, id) {
	this.x 		= posX 	|| 0
	this.y 		= posY 	|| 0
	this.id 	= id 	|| 0
	this.speed 	= (getRandomInt(1, 10) / 10)
	this.img 	= window.location.href + `images/${image}.png`
}

Guys.prototype.randomGuys = function (size) {
	var i = 0, 
		s = size || 5
	for (i; i < size; i++) {
		var randNumber = getRandomInt(1, 151)
		guys.push(new Guys(0, 0, randNumber, randNumber))
	}
}

Guys.prototype.randomMovement = function () {
	guys.some(function (element, index, arr) {
		if (element.id == user.id) return

		var topValue, 
			el = element, 
			i  = index
		setInterval(function () {
			var top = document.querySelector('.canvasContainer').children[i].children[0].style.top

			//if (parseInt(top.split('%')[0]) >= 90) clearAllIntervals()

			if (top == '') {
				document.querySelector('.canvasContainer').children[i].children[0].style.top = '-10%'
			} else {
				document.querySelector('.canvasContainer').children[i].children[0].style.top = (el.speed + parseFloat(top.split('%')[0])) + '%'
			}
		}, 100)
	})
}
