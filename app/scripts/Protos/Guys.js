'use strict'

var Guys = function (posX, posY, image) {
	this.x 		= posX || 0
	this.y 		= posY || 0
	this.speed 	= 0.1
	this.img 	= window.location.href + `images/${image}.png`
}

Guys.prototype.randomGuys = function (size) {
	let i = 0, 
		s = size || 5
	for (i; i < size; i++) {
		guys.push(new Guys(0, 0, getRandomInt(1, 151)))
	}
}

Guys.prototype.randomMovement = function () {
	guys.some(function (element, index, arr) {
		let topValue, 
			el = element, 
			i  = index
	// 	// document.querySelector('.canvasContainer').children[0].children[0].offsetTop
		setInterval(function () {
			let top = document.querySelector('.canvasContainer').children[i].children[0].style.top

			if (parseInt(top.split('%')[0]) >= 90) clearAllIntervals()
			
			console.log(top)
			topValue = document.querySelector('.canvasContainer').children[i].children[0].style.top
			if (topValue == '') {
				document.querySelector('.canvasContainer').children[i].children[0].style.top = '-10%'
			} else {
				
				//console.log(top.split('%')[0])
				document.querySelector('.canvasContainer').children[i].children[0].style.top = (1 + parseInt(top.split('%')[0])) + '%'
			}
			//console.log(document.querySelector('.canvasContainer').children[i])
			//topValue = ´${1 + topValue.split('%')[0]}%´

		}, 100)
	})
}
