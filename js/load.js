var c = document.getElementById("game");
var ctx = c.getContext("2d");
var images = {
};
function loadImages(s) {
	ctx.fillStyle = "#383838";
	let scale = s;
	ctx.fillRect(0, 0, 150*scale, 150*scale);
	ctx.beginPath();
	ctx.moveTo(5*scale,7*scale);
	ctx.lineTo(5*scale,143*scale);
	ctx.lineTo(15*scale,133*scale);
	ctx.lineTo(15*scale,17*scale);
	ctx.closePath();
	ctx.fillStyle = "#505050";
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(7*scale,5*scale);
	ctx.lineTo(143*scale,5*scale);
	ctx.lineTo(133*scale,15*scale);
	ctx.lineTo(17*scale,15*scale);
	ctx.closePath();
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(145*scale,7*scale);
	ctx.lineTo(135*scale,17*scale);
	ctx.lineTo(135*scale,133*scale);
	ctx.lineTo(145*scale,143*scale);
	ctx.closePath();
	ctx.fillStyle = "#202020";
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(7*scale,145*scale);
	ctx.lineTo(17*scale,135*scale);
	ctx.lineTo(133*scale,135*scale);
	ctx.lineTo(143*scale,145*scale);
	ctx.closePath();
	ctx.fill();
	
	images["baseplate"] = ctx.getImageData(0,0,150*scale,150*scale);
	ctx.clearRect(0,0,300,300);
}
loadImages(0.3);
ctx.putImage(images["baseplate"], 150, 150);
