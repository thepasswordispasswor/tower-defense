var c = document.getElementById("game");
var ctx = c.getContext("2d");
var images = {
};

var p = {
	map: {},
}

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
	ctx.lineTo(1*scale,29*scale);
	ctx.lineTo(29*scale,29*scale);
	ctx.closePath();
	ctx.fillStyle = "#202020";
	ctx.fill();
	
	images["basePlate"] = ctx.getImageData(0,0,30*scale,30*scale);
	ctx.clearRect(0,0,300,300);
}
loadImages(1);

function loadMap(map) {
	let temp = Object.assign({}, p.map);
	p.map = map;
	return temp;
}

function displayMap() {
	let m = p.map;
	for(let i = 0; i < m.height; i++) {
		for(let o = 0; o < m.width; o++) {
			if(m[i+""+o] === "basePlate") ctx.putImageData(images[m[i+""+o]], o*30, i*30);
		}
	}
}

function Map(width, height, mapInfo) {
	this.width = width;
	this.height = height;
	for(let i = 0; i < height; i++) {
		for(let o = 0; o < width; o++) {
			this[i+""+o] = mapInfo[i][o];
		}
	}
}

var snakeMap = new Map(9, 9, [
	["basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate",	],
	["start",	"", 		"", 		"", 		"", 		"", 		"", 		"", 		"basePlate",	],
	["basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"", 		"basePlate",	],
	["basePlate", 	"", 		"",		"",		"",		"",		"",		"",		"basePlate",	],
	["basePlate", 	"",		"basePlate",	"basePlate",	"basePlate",	"basePlate",	"basePlate",	"basePlate",	"basePlate",	],
	["basePlate", 	"",		"",		"",		"",		"",		"",		"",		"basePlate",	],
	["basePlate", 	"basePlate",	"basePlate",	"basePlate",	"basePlate",	"basePlate",	"basePlate",	"", 		"basePlate",	],
	["basePlate", 	"", 		"", 		"", 		"", 		"", 		"". 		"",		"end",		],
	["basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate", 	"basePlate",	],
]);

loadMap(snakeMap);
displayMap();
function test() {
	putImageData(images["basePlate"], 0, 100);
}
