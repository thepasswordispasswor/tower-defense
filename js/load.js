var c = document.getElementById("game");
var ctx = c.getContext("2d");
var images = {
};
function loadImages(s) {
	ctx.fillStyle = "#383838";
	let scale = s;
	ctx.fillRect(0, 0, 30*scale, 30*scale);
	ctx.beginPath();
	ctx.moveTo(1*scale,1*scale);
	ctx.lineTo(1*scale,29*scale);
	ctx.lineTo(3*scale,27*scale);
	ctx.lineTo(3*scale,3*scale);
	ctx.lineTo(27*scale,3*scale);
	ctx.lineTo(29*scale,1*scale);
	ctx.closePath();
	ctx.fillStyle = "#505050";
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(29*scale,1*scale);
	ctx.lineTo(27*scale,3*scale);
	ctx.lineTo(27*scale,27*scale);
	ctx.lineTo(3*scale,27*scale);
	ctx.moveTo(1*scale,29*scale);
	ctx.lineTo(29*scale,29*scale);
	ctx.closePath();
	ctx.fillStyle = "#202020";
	ctx.fill();
	
	images["baseplate"] = ctx.getImageData(0,0,30*scale,30*scale);
	ctx.clearRect(0,0,300,300);
}
loadImages(1);
ctx.putImageData(images["baseplate"], 150, 150);
