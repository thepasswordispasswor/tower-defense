var c = document.getElementById("game");
var ctx = c.getContext("2d");
ctx.fillStyle = "#383838";
var s = 0.3;
ctx.fillRect(0, 0, 150*s, 150*s);
ctx.beginPath();
ctx.moveTo(5*s,7*s);
ctx.lineTo(5*s,143*s);
ctx.lineTo(15*s,133*s);
ctx.lineTo(15*s,17*s);
ctx.closePath();
ctx.fillStyle = "#505050";
ctx.fill();

ctx.beginPath();
ctx.moveTo(7*s,5*s);
ctx.lineTo(143*s,5*s);
ctx.lineTo(133*s,15*s);
ctx.lineTo(17*s,15*s);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(145*s,7*s);
ctx.lineTo(135*s,17*s);
ctx.lineTo(135*s,133*s);
ctx.lineTo(145*s,143*s);
ctx.closePath();
ctx.fillStyle = "#202020";
ctx.fill();

ctx.beginPath();
ctx.moveTo(2.1,43.5);
ctx.lineTo(5.1,40.5);
ctx.lineTo(39.9,40.5);
ctx.lineTo(42.9,43.5);
ctx.closePath();
ctx.fill();

var towerTile = ctx.getImageData(0,0,150,150);
ctx.putImageData(towerTile, 150, 150, 0, 0, 45, 45);
