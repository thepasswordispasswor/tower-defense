var c = document.getElementById("game");
var ctx = c.getContext("2d");
var images = {
};

var p = {
	map: {},
}

function loadImages() {
	ctx.fillStyle = "#383842";
	ctx.fillRect(0, 0, 30, 30);
	
	ctx.fillStyle = "#50505a";
	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(0,30);
	ctx.lineTo(2,28);
	ctx.lineTo(2,2);
	ctx.lineTo(28,2);
	ctx.lineTo(30,0);
	ctx.closePath();
	ctx.fill();
	
	ctx.fillStyle = "#20202a";
	ctx.beginPath();
	ctx.moveTo(30,0);
	ctx.lineTo(28,2);
	ctx.lineTo(28,28);
	ctx.lineTo(2,28);
	ctx.lineTo(0,30);
	ctx.lineTo(30,30);
	ctx.closePath();
	ctx.fill();
	
	images["basePlate"] = ctx.getImageData(0,0,30,30);
	
	ctx.fillStyle = "#282832";
	ctx.fillRect(0, 0, 30, 30);
	
	ctx.fillStyle = "#404049";
	ctx.beginPath();
	ctx.moveTo(1,1);
	ctx.lineTo(1,29);
	ctx.lineTo(3,27);
	ctx.lineTo(3,3);
	ctx.lineTo(30,3);
	ctx.lineTo(30,1);
	ctx.closePath();
	ctx.fill();
	
	ctx.fillStyle = "#101019";
	ctx.beginPath();
	ctx.moveTo(30,27);
	ctx.lineTo(3,27);
	ctx.lineTo(1,29);
	ctx.lineTo(30,29);
	ctx.closePath();
	ctx.fill();
	
	ctx.fillStyle = "#11dd77";
	ctx.beginPath();
	ctx.moveTo(15,8);
	ctx.lineTo(22,15);
	ctx.lineTo(15,22);
	ctx.lineTo(8,15);
	ctx.closePath();
	ctx.fill();
	
	images["startRight"] = ctx.getImageData(0,0,30,30);
	
	ctx.fillStyle = "#282832";
	ctx.fillRect(0, 0, 30, 30);
	
	ctx.fillStyle = "#404049";
	ctx.beginPath();
	ctx.moveTo(1,1);
	ctx.lineTo(1,30);
	ctx.lineTo(3,30);
	ctx.lineTo(3,3);
	ctx.lineTo(27,3);
	ctx.lineTo(29,1);
	ctx.closePath();
	ctx.fill();
	
	ctx.fillStyle = "#101019";
	ctx.beginPath();
	ctx.moveTo(29,1);
	ctx.lineTo(27,3);
	ctx.lineTo(27,30);
	ctx.lineTo(29,30);
	ctx.closePath();
	ctx.fill();
	
	ctx.fillStyle = "#11dd77";
	ctx.beginPath();
	ctx.moveTo(15,8);
	ctx.lineTo(22,15);
	ctx.lineTo(15,22);
	ctx.lineTo(8,15);
	ctx.closePath();
	ctx.fill();
	
	images["startDown"] = ctx.getImageData(0,0,30,30);
	
	ctx.fillStyle = "#282832";
	ctx.fillRect(0, 0, 30, 30);
	
	ctx.fillStyle = "#404049";
	ctx.beginPath();
	ctx.moveTo(0,1);
	ctx.lineTo(0,3);
	ctx.lineTo(27,3);
	ctx.lineTo(29,1);
	ctx.closePath();
	ctx.fill();
	
	ctx.fillStyle = "#101019";
	ctx.beginPath();
	ctx.moveTo(29,1);
	ctx.lineTo(27,3);
	ctx.lineTo(27,27);
	ctx.lineTo(0,27);
	ctx.lineTo(0,29);
	ctx.lineTo(29,29);
	ctx.closePath();
	ctx.fill();
	
	ctx.fillStyle = "#11dd77";
	ctx.beginPath();
	ctx.moveTo(15,8);
	ctx.lineTo(22,15);
	ctx.lineTo(15,22);
	ctx.lineTo(8,15);
	ctx.closePath();
	ctx.fill();
	
	images["startLeft"] = ctx.getImageData(0,0,30,30);
	
	ctx.fillStyle = "#282832";
	ctx.fillRect(0, 0, 30, 30);
	
	ctx.fillStyle = "#404049";
	ctx.beginPath();
	ctx.moveTo(1,0);
	ctx.lineTo(3,0);
	ctx.lineTo(3,27);
	ctx.lineTo(1,29);
	ctx.closePath();
	ctx.fill();
	
	ctx.fillStyle = "#101019";
	ctx.beginPath();
	ctx.moveTo(29,0);
	ctx.lineTo(27,0);
	ctx.lineTo(27,27);
	ctx.lineTo(3,27);
	ctx.lineTo(1,29);
	ctx.lineTo(29,29);
	ctx.closePath();
	ctx.fill();
	
	ctx.fillStyle = "#11dd77";
	ctx.beginPath();
	ctx.moveTo(15,8);
	ctx.lineTo(22,15);
	ctx.lineTo(15,22);
	ctx.lineTo(8,15);
	ctx.closePath();
	ctx.fill();
	
	images["startUp"] = ctx.getImageData(0,0,30,30);
	
	ctx.fillStyle = "#282832";
	ctx.fillRect(0, 0, 30, 30);
	
	ctx.fillStyle = "#404049";
	ctx.beginPath();
	ctx.moveTo(1,1);
	ctx.lineTo(1,29);
	ctx.lineTo(3,27);
	ctx.lineTo(3,3);
	ctx.lineTo(30,3);
	ctx.lineTo(30,1);
	ctx.closePath();
	ctx.fill();
	
	ctx.fillStyle = "#101019";
	ctx.beginPath();
	ctx.moveTo(30,27);
	ctx.lineTo(3,27);
	ctx.lineTo(1,29);
	ctx.lineTo(30,29);
	ctx.closePath();
	ctx.fill();
	
	ctx.fillStyle = "#dd4444";
	ctx.beginPath();
	ctx.moveTo(15,8);
	ctx.lineTo(22,15);
	ctx.lineTo(15,22);
	ctx.lineTo(8,15);
	ctx.closePath();
	ctx.fill();
	
	images["endRight"] = ctx.getImageData(0,0,30,30);
	
	ctx.fillStyle = "#282832";
	ctx.fillRect(0, 0, 30, 30);
	
	ctx.fillStyle = "#404049";
	ctx.beginPath();
	ctx.moveTo(1,1);
	ctx.lineTo(1,30);
	ctx.lineTo(3,30);
	ctx.lineTo(3,3);
	ctx.lineTo(27,3);
	ctx.lineTo(29,1);
	ctx.closePath();
	ctx.fill();
	
	ctx.fillStyle = "#101019";
	ctx.beginPath();
	ctx.moveTo(29,1);
	ctx.lineTo(27,3);
	ctx.lineTo(27,30);
	ctx.lineTo(29,30);
	ctx.closePath();
	ctx.fill();
	
	ctx.fillStyle = "#dd4444";
	ctx.beginPath();
	ctx.moveTo(15,8);
	ctx.lineTo(22,15);
	ctx.lineTo(15,22);
	ctx.lineTo(8,15);
	ctx.closePath();
	ctx.fill();
	
	images["endDown"] = ctx.getImageData(0,0,30,30);
	
	ctx.fillStyle = "#282832";
	ctx.fillRect(0, 0, 30, 30);
	
	ctx.fillStyle = "#404049";
	ctx.beginPath();
	ctx.moveTo(0,1);
	ctx.lineTo(0,3);
	ctx.lineTo(27,3);
	ctx.lineTo(29,1);
	ctx.closePath();
	ctx.fill();
	
	ctx.fillStyle = "#101019";
	ctx.beginPath();
	ctx.moveTo(29,1);
	ctx.lineTo(27,3);
	ctx.lineTo(27,27);
	ctx.lineTo(0,27);
	ctx.lineTo(0,29);
	ctx.lineTo(29,29);
	ctx.closePath();
	ctx.fill();
	
	ctx.fillStyle = "#dd4444";
	ctx.beginPath();
	ctx.moveTo(15,8);
	ctx.lineTo(22,15);
	ctx.lineTo(15,22);
	ctx.lineTo(8,15);
	ctx.closePath();
	ctx.fill();
	
	images["endLeft"] = ctx.getImageData(0,0,30,30);
	
	ctx.fillStyle = "#282832";
	ctx.fillRect(0, 0, 30, 30);
	
	ctx.fillStyle = "#404049";
	ctx.beginPath();
	ctx.moveTo(1,0);
	ctx.lineTo(3,0);
	ctx.lineTo(3,27);
	ctx.lineTo(1,29);
	ctx.closePath();
	ctx.fill();
	
	ctx.fillStyle = "#101019";
	ctx.beginPath();
	ctx.moveTo(29,0);
	ctx.lineTo(27,0);
	ctx.lineTo(27,27);
	ctx.lineTo(3,27);
	ctx.lineTo(1,29);
	ctx.lineTo(29,29);
	ctx.closePath();
	ctx.fill();
	
	ctx.fillStyle = "#dd4444";
	ctx.beginPath();
	ctx.moveTo(15,8);
	ctx.lineTo(22,15);
	ctx.lineTo(15,22);
	ctx.lineTo(8,15);
	ctx.closePath();
	ctx.fill();
	
	images["endUp"] = ctx.getImageData(0,0,30,30);
	
	ctx.fillStyle = "#282832";
	ctx.fillRect(0, 0, 30, 30);
	
	ctx.fillStyle = "#404049";
	ctx.beginPath();
	ctx.moveTo(1,0);
	ctx.lineTo(3,0);
	ctx.lineTo(3,30);
	ctx.lineTo(1,30);
	ctx.closePath();
	ctx.fill();
	
	ctx.fillStyle = "#101019";
	ctx.beginPath();
	ctx.moveTo(29,0);
	ctx.lineTo(27,0);
	ctx.lineTo(27,30);
	ctx.lineTo(29,30);
	ctx.closePath();
	ctx.fill();
	
	images["verHall"] = ctx.getImageData(0,0,30,30);
	
	ctx.fillStyle = "#282832";
	ctx.fillRect(0, 0, 30, 30);
	
	ctx.fillStyle = "#404049";
	ctx.beginPath();
	ctx.moveTo(0,1);
	ctx.lineTo(0,3);
	ctx.lineTo(30,3);
	ctx.lineTo(30,1);
	ctx.closePath();
	ctx.fill();
	
	ctx.fillStyle = "#101019";
	ctx.beginPath();
	ctx.moveTo(0,29);
	ctx.lineTo(0,27);
	ctx.lineTo(30,27);
	ctx.lineTo(30,29);
	ctx.closePath();
	ctx.fill();
	
	images["horHall"] = ctx.getImageData(0,0,30,30);
	
	ctx.fillStyle = "#282832";
	ctx.fillRect(0, 0, 30, 30);
	
	ctx.fillStyle = "#404049";
	ctx.beginPath();
	ctx.moveTo(0,1);
	ctx.lineTo(0,3);
	ctx.lineTo(3,3);
	ctx.lineTo(3,0);
	ctx.lineTo(1,0);
	ctx.lineTo(1,1);
	ctx.closePath();
	ctx.fill();
	
	ctx.fillStyle = "#101019";
	ctx.beginPath();
	ctx.moveTo(0,29);
	ctx.lineTo(0,27);
	ctx.lineTo(27,27);
	ctx.lineTo(27,0);
	ctx.lineTo(29,0);
	ctx.lineTo(29,29);
	ctx.closePath();
	ctx.fill();
	
	images["NW"] = ctx.getImageData(0,0,30,30);
	
	ctx.fillStyle = "#282832";
	ctx.fillRect(0, 0, 30, 30);
	
	ctx.fillStyle = "#404049";
	ctx.beginPath();
	ctx.moveTo(30,3);
	ctx.lineTo(30,1);
	ctx.lineTo(29,1);
	ctx.lineTo(27,3);
	ctx.closePath();
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(1,0);
	ctx.lineTo(3,0);
	ctx.lineTo(3,27);
	ctx.lineTo(1,29);
	ctx.closePath();
	ctx.fill();
	
	ctx.fillStyle = "#101019";
	ctx.beginPath();
	ctx.moveTo(27,0);
	ctx.lineTo(29,0);
	ctx.lineTo(29,1);
	ctx.lineTo(27,3);
	ctx.closePath();
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(30,27);
	ctx.lineTo(30,29);
	ctx.lineTo(1,29);
	ctx.lineTo(3,27);
	ctx.closePath();
	ctx.fill();
	
	images["NE"] = ctx.getImageData(0,0,30,30);
	
	ctx.fillStyle = "#282832";
	ctx.fillRect(0, 0, 30, 30);
	
	ctx.fillStyle = "#404049";
	ctx.beginPath();
	ctx.moveTo(0,3);
	ctx.lineTo(0,1);
	ctx.lineTo(29,1);
	ctx.lineTo(27,3);
	ctx.closePath();
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(3,30);
	ctx.lineTo(1,30);
	ctx.lineTo(1,29);
	ctx.lineTo(3,27);
	ctx.closePath();
	ctx.fill();
	
	ctx.fillStyle = "#101019";
	ctx.beginPath();
	ctx.moveTo(27,30);
	ctx.lineTo(29,30);
	ctx.lineTo(29,1);
	ctx.lineTo(27,3);
	ctx.closePath();
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(0,29);
	ctx.lineTo(0,27);
	ctx.lineTo(3,27);
	ctx.lineTo(1,29);
	ctx.closePath();
	ctx.fill();
	
	images["SW"] = ctx.getImageData(0,0,30,30);
	
	ctx.fillStyle = "#282832";
	ctx.fillRect(0, 0, 30, 30);
	
	ctx.fillStyle = "#404049";
	ctx.beginPath();
	ctx.moveTo(30,1);
	ctx.lineTo(30,3);
	ctx.lineTo(3,3);
	ctx.lineTo(3,30);
	ctx.lineTo(1,30);
	ctx.lineTo(1,1);
	ctx.closePath();
	ctx.fill();
	
	ctx.fillStyle = "#101019";
	ctx.beginPath();
	ctx.moveTo(30,29);
	ctx.lineTo(30,27);
	ctx.lineTo(27,27);
	ctx.lineTo(27,30);
	ctx.lineTo(29,30);
	ctx.lineTo(29,29);
	ctx.closePath();
	ctx.fill();
	
	images["SE"] = ctx.getImageData(0,0,30,30);
	
	ctx.fillStyle = "#282832";
	ctx.fillRect(0, 0, 30, 30);
	
	images["void"] = ctx.getImageData(0,0,30,30);
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
			ctx.putImageData(images[m[i+""+o]], o*30, i*30);
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
	["basePlate",	"startRight", 	"horHall", 	"horHall", 	"horHall", 	"horHall", 	"horHall",  	"SW",   	"basePlate"	],
	["basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"verHall", 	"basePlate"	],
	["basePlate",	"SE",   	"horHall", 	"horHall", 	"horHall", 	"horHall", 	"horHall",  	"NW",   	"basePlate"	],
	["basePlate", 	"verHall", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate"	],
	["basePlate",	"NE",   	"horHall", 	"horHall", 	"horHall", 	"horHall", 	"horHall",  	"SW",   	"basePlate"	],
	["basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"verHall", 	"basePlate"	],
	["basePlate",	"endRight",   	"horHall", 	"horHall", 	"horHall", 	"horHall", 	"horHall",  	"NW",   	"basePlate"	],
	["basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate"	],
]);

function test() {
	loadImages();
	loadMap(snakeMap);
	displayMap();
}

function openTab(tabName) {
 	let i;
 	let x = document.getElementsByClassName("tab");
 	for (i = 0; i < x.length; i++) {
 		x[i].style.display = "none";  
 	}
 	document.getElementById(tabName).style.display = "inline-block";  
}
