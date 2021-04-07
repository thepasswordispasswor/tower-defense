var c = document.getElementById("game");
var ctx = c.getContext("2d");
var images = {
};

var p = {
	map: {},
}

function loadImages() {
	ctx.fillStyle = "#383838";
	ctx.fillRect(0, 0, 30, 30);
	ctx.beginPath();
	ctx.moveTo(1,1);
	ctx.lineTo(1,29);
	ctx.lineTo(3,27);
	ctx.lineTo(3,3);
	ctx.lineTo(27,3);
	ctx.lineTo(29,1);
	ctx.closePath();
	ctx.fillStyle = "#505050";
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(29,1);
	ctx.lineTo(27,3);
	ctx.lineTo(27,27);
	ctx.lineTo(3,27);
	ctx.lineTo(1,29);
	ctx.lineTo(29,29);
	ctx.closePath();
	ctx.fillStyle = "#202020";
	ctx.fill();
	
	images["basePlate"] = ctx.getImageData(0,0,30,30);
	
	ctx.fillStyle = "#282832";
	ctx.fillRect(0, 0, 30, 30);
	ctx.beginPath();
	ctx.moveTo(1,1);
	ctx.lineTo(1,29);
	ctx.lineTo(3,27);
	ctx.lineTo(3,3);
	ctx.lineTo(30,3);
	ctx.lineTo(30,1);
	ctx.closePath();
	ctx.fillStyle = "#404049";
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(30,27);
	ctx.lineTo(3,27);
	ctx.lineTo(1,29);
	ctx.lineTo(30,29);
	ctx.closePath();
	ctx.fillStyle = "#101019";
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(15,8);
	ctx.lineTo(22,15);
	ctx.lineTo(15,22);
	ctx.lineTo(8,15);
	ctx.closePath();
	ctx.fillStyle = "#11dd77";
	ctx.fill();
	
	images["startRight"] = ctx.getImageData(0,0,30,30);
	
	ctx.fillStyle = "#282832";
	ctx.fillRect(0, 0, 30, 30);
	ctx.beginPath();
	ctx.moveTo(1,1);
	ctx.lineTo(1,30);
	ctx.lineTo(3,30);
	ctx.lineTo(3,3);
	ctx.lineTo(27,3);
	ctx.lineTo(29,1);
	ctx.closePath();
	ctx.fillStyle = "#404049";
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(29,1);
	ctx.lineTo(27,3);
	ctx.lineTo(27,30);
	ctx.lineTo(29,30);
	ctx.closePath();
	ctx.fillStyle = "#101019";
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(15,8);
	ctx.lineTo(22,15);
	ctx.lineTo(15,22);
	ctx.lineTo(8,15);
	ctx.closePath();
	ctx.fillStyle = "#11dd77";
	ctx.fill();
	
	images["startDown"] = ctx.getImageData(0,0,30,30);
}

function loadMap(map) {
	let temp = Object.assign({}, p.map);
	p.map = Object.assign({}, map);
	return temp;
}

function displayMap() {
	let m = p.map;
	for(let i = 0; i < m["height"]; i++) {
		for(let o = 0; o < m["width"]; o++) {
			if(m[i+""+o] === "basePlate") ctx.putImageData(images[m[i+""+o]], o*30, i*30);
		}
	}
}

function Map(mapInfo) {
	this["height"] = mapInfo.length;
	this["width"] = mapInfo[0].length;
	for(let i = 0; i < this["height"]; i++) {
		for(let o = 0; o < this["width"]; o++) {
			this[i+""+o] = mapInfo[i][o];
		}
	}
}

var snakeMap = new Map([
	["basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate"	],
]);

function test() {
	loadImages();
	loadMap(snakeMap);
	displayMap();
}
