'use strict'

//	Constructor de para los valores de la pantalla
var Screen = function (width, height) {
	
}

//	
Screen.prototype.background = function () {
}

Screen.prototype.drawGuys = function(size) {
	let container 	= document.querySelector('.canvasContainer'), 
		children 	= container.children, 
		i 			= 0,
		divisions 	= size || 5, 
		img

	for (i; i < children.length; i++) {
		//console.log(children[i])
		let c 	= children[i]
		img 	= new Image()
		img.src = guys[i].img
		img.onload = function () {
			c.children[0].appendChild(this)
		}
	}

	//	Recorriendo el arreglo de los personajes y mostrandolos en pantalla
	// guys.some(function (element, index, arr) {
	// 	let i 		= index + 1
	// 	let center 	= ((divisionSize * i) - 100)
	// 	img 		= new Image()

	// 	//element.x = (20 * i)
	// 	//element.y = 0

	// 	img.src = element.img
	// 	img.onload = function () {
	// 		ctx.drawImage(this, center, element.y, 60, 60)
	// 	}
	// })
}

Screen.prototype.drawDivisions = function () {
	let w 			= this.width, 
		h 			= this.height, 
		divisions 	= 5, 
		ctx 		= this.ctx, 
		i 			= 1, 
		divisionSize = w / divisions

	for(i; i < divisions; i++) {
		ctx.beginPath()
	    ctx.moveTo(divisionSize * i, 0)
	    ctx.lineTo(divisionSize * i, w)
	    ctx.stroke()
	}
}

//	
Screen.prototype.clear = function () {
	this.ctx.clearRect(0, 0, this.width, this.height)
}
