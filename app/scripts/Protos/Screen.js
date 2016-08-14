'use strict'

//	Constructor de para los valores de la pantalla
var Screen = function () {
	this.arrowDown = 40
}

Screen.prototype.pressKey = function () {
	let arrowDown = this.arrowDown
	document.addEventListener('click', function (e) {
		if (winner) return false

		guys.some(function (element, index, arr) {
			if (parseInt(user.id) !== element.id) return

			let top = document.querySelector('.canvasContainer').children[index].children[0].style.top
			if (top == '') {
				document.querySelector('.canvasContainer').children[index].children[0].style.top = '-10%'
			} else {
				document.querySelector('.canvasContainer').children[index].children[0].style.top = (element.speed + parseFloat(top.split('%')[0])) + '%'
			}
		})
	})
	document.addEventListener('keyup', function (e) {
		if (winner) return false

		let key = e.keyCode || e.which

		if (key !== arrowDown) return false

		guys.some(function (element, index, arr) {
			if (parseInt(user.id) !== element.id) return

			let top = document.querySelector('.canvasContainer').children[index].children[0].style.top
			if (top == '') {
				document.querySelector('.canvasContainer').children[index].children[0].style.top = '-10%'
			} else {
				document.querySelector('.canvasContainer').children[index].children[0].style.top = (element.speed + parseFloat(top.split('%')[0])) + '%'
			}
		})
	})
}

//	
Screen.prototype.background = function () {}

Screen.prototype.drawGuys = function(size) {
	let container 	= document.querySelector('.canvasContainer'), 
		children 	= container.children, 
		i 			= 0,
		divisions 	= size || 5, 
		img

	for (i; i < children.length; i++) {
		let c 	= children[i]
		img 	= new Image()
		img.src = guys[i].img
		img.onload = function () {
			c.children[0].appendChild(this)
		}
	}
}
