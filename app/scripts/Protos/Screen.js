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
	let ctx = this.ctx

	for (var i = 1; i <= 3; i++) {
		let img = new Image()
		console.log((40 * i))
		console.log((50 * i))
		let guy = new Guys((20 * i), (30 * i), i)

		img.src = guy.img
		img.onload = function () {
			//let random = new Handler().getRandom(10, 30)
			ctx.drawImage(this, guy.x, guy.y, 50, 50)
		}
	}
}

Screen.prototype.drawDivisions = function () {
	let w 			= this.width, 
		h 			= this.height, 
		divisions 	= 5, 
		ctx 		= this.ctx, 
		i 			= 1, 
		divisionSize = w / divisions

	for(i; i < divisions; i++) {
		ctx.beginPath();
	    ctx.moveTo(divisionSize * i, 0);
	    ctx.lineTo(divisionSize * i, w);
	    ctx.stroke();
		console.log(divisionSize * i)
	}
}

//	
Screen.prototype.clear = function () {
	
}
