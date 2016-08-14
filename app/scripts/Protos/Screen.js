'use strict'

//	Constructor de para los valores de la pantalla
var Screen = function (width, height) {
	this.canvas 		= document.createElement('canvas')
	this.canvas.width 	= this.width 	= width
	this.canvas.height 	= this.height 	= height

	this.ctx = this.canvas.getContext('2d')

	//	Pegando el canvas a el documento html
	document.querySelector('#canvasContainer').appendChild(this.canvas)
}

//	
Screen.prototype.background = function () {
	let ctx = this.ctx

	ctx.fillStyle = "#9ea7b8";
    ctx.fillRect(0, 0, this.width, this.height);
}

Screen.prototype.drawGuys = function() {
	let w 			= this.width, 
		divisions 	= 5, 
		ctx 		= this.ctx, 
		i 			= 1, 
		divisionSize = w / divisions

	//	Recorriendo el arreglo de los personajes y mostrandolos en pantalla
	guys.some(function (element, index, arr) {
		let i = index + 1
		console.log(index)
		let center 	= ((divisionSize * i) - 100)
		let img 	= new Image()

		element.x = (20 * i)
		element.y = 0

		img.src = element.img
		img.onload = function () {
			ctx.drawImage(this, center, element.y, 60, 60)
		}
	})
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
	
}
