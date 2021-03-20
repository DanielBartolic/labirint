var canvasPot = document.getElementById("IzrisPot");
var ctxPot = canvasPot.getContext("2d");
ctxPot.scale(1.872, 1.872);
var slider = document.getElementById("slider");
var desnaSlika = true;
var LevaSlika = false;

var changeX;
var changeY;

var changeXs;
var changeYs;

var desnaSlikaS = true;
var LevaSlikaS = false;

var prog = 0;

var modal = document.getElementById("myModal");

var imgMazeCanvas = document.querySelector("#maze");

setInterval("changeImg()", 240);

function Izris() {
  console.log(imgMazeCanvas);
  ctxPot.drawImage(imgMazeCanvas, 0, 0);
}

var resitev = [];

resitev.push({ x: 170, y: 322 });
resitev.push({ x: 170, y: 314 }); 
resitev.push({ x: 138, y: 314 }); 
resitev.push({ x: 138, y: 298 }); 
resitev.push({ x: 170, y: 298 }); 
resitev.push({ x: 170, y: 266 }); 
resitev.push({ x: 186, y: 266 }); 
resitev.push({ x: 186, y: 282 }); 
resitev.push({ x: 202, y: 282 }); 
resitev.push({ x: 202, y: 266 }); 
resitev.push({ x: 218, y: 266 }); 
resitev.push({ x: 218, y: 250 }); 
resitev.push({ x: 234, y: 250 }); 
resitev.push({ x: 234, y: 202 }); 
resitev.push({ x: 218, y: 202 }); 
resitev.push({ x: 218, y: 138 }); 
resitev.push({ x: 202, y: 138 }); 
resitev.push({ x: 202, y: 122 }); 
resitev.push({ x: 218, y: 122 }); 
resitev.push({ x: 218, y: 106 }); 
resitev.push({ x: 234, y: 106 }); 
resitev.push({ x: 234, y: 90 });
resitev.push({ x: 202, y: 90 }); 
resitev.push({ x: 202, y: 74 }); 
resitev.push({ x: 218, y: 74 }); 
resitev.push({ x: 218, y: 58 }); 
resitev.push({ x: 202, y: 58 }); 
resitev.push({ x: 202, y: 42 }); 
resitev.push({ x: 138, y: 42 }); 
resitev.push({ x: 138, y: 10 }); 
resitev.push({ x: 154, y: 10 }); 
resitev.push({ x: 154, y: 2 });

//najs
resitev.push({ x: -100, y: 0 });
resitev.push({ x: -100, y: 0 });
resitev.push({ x: -100, y: 0 });
resitev.push({ x: -100, y: 0 });
resitev.push({ x: -100, y: 0 });
resitev.push({ x: -100, y: 0 });
resitev.push({ x: -100, y: 0 });
resitev.push({ x: -100, y: 0 });
resitev.push({ x: -100, y: 0 });
resitev.push({ x: -100, y: 0 });
resitev.push({ x: -100, y: 0 });
resitev.push({ x: -100, y: 0 });
resitev.push({ x: -100, y: 0 });
resitev.push({ x: -100, y: 0 });

function calcWaypoints(resitev, speed) {
  var waypoints = [];
  for (var i = 1; i < resitev.length; i++) {
    var pt0 = resitev[i - 1];
    var pt1 = resitev[i];
    var dx = pt1.x - pt0.x;
    var dy = pt1.y - pt0.y;
    for (var j = 0; j < speed; j++) {
      var x = pt0.x + (dx * j) / speed;
      var y = pt0.y + (dy * j) / speed;
      waypoints.push({ x: x, y: y });
    }
  }
  return waypoints;
}

var points = calcWaypoints(resitev, 130);
var pointsS = calcWaypoints(resitev,85);

var t = 1;
var d = 1;

var s = t;


var requestId;

function animate() {
  requestId = false;
  
  ctxPot.clearRect(0, 0, 656, 656);
  ctxPot.drawImage(imgMazeCanvas, 0, 0);
  drawKajak(t);
  t++;

  if(prog > 40){
    drawShark(s);
    s++;
  }

  start();
  
  prog = prog + 0.025;
  update();
}

function start() {
  if (!requestId) {
    requestId = window.requestAnimationFrame(animate);
  }
}

// function stop() {
//   if (requestId) {
//     window.cancelAnimationFrame(requestId);
//     requestId = undefined;
//   }
// }

function rf() {
  location.reload();
}

function drawKajak(t) {
  var imgH1 = document.getElementById("kajakH1");
  var imgH2 = document.getElementById("kajakH2");
  var imgV1 = document.getElementById("kajakV1");
  var imgV2 = document.getElementById("kajakV2");

  if (changeY == points[t].y) {
    if (desnaSlika) {
      ctxPot.drawImage(
        imgV1,
        points[t - 1].x - 55,
        points[t - 1].y - 55,
        110,
        110
      );
      ctxPot.drawImage(imgV1, points[t].x - 55, points[t].y - 55, 110, 110);
    }
    if (LevaSlika) {
      ctxPot.drawImage(
        imgV2,
        points[t - 1].x - 55,
        points[t - 1].y - 55,
        110,
        110
      );
      ctxPot.drawImage(imgV2, points[t].x - 55, points[t].y - 55, 110, 110);
    }
  }

  if (changeX == points[t].x) {
    if (desnaSlika) {
      ctxPot.drawImage(
        imgH1,
        points[t - 1].x - 55,
        points[t - 1].y - 55,
        110,
        110
      );
      ctxPot.drawImage(imgH1, points[t].x - 55, points[t].y - 55, 110, 110);
    }
    if (LevaSlika) {
      ctxPot.drawImage(
        imgH2,
        points[t - 1].x - 55,
        points[t - 1].y - 55,
        110,
        110
      );
      ctxPot.drawImage(imgH2, points[t].x - 55, points[t].y - 55, 110, 110);
    }
  }

  changeX = points[t].x;
  changeY = points[t].y;
}

function drawShark(t) {
  var xOff = -10;
  var yOff = -10;
  var imgH1 = document.getElementById("sharkH1");
  var imgH2 = document.getElementById("sharkH2");
  var imgH1down = document.getElementById("sharkH1down");
  var imgH2down = document.getElementById("sharkH2down");
  var imgV1up = document.getElementById("sharkV1up");
  var imgV2up = document.getElementById("sharkV2up");
  var imgV1down = document.getElementById("sharkV1down");
  var imgV2down = document.getElementById("sharkV2down");

  if (changeYs == pointsS[t].y && changeXs-pointsS[t].x < 0) {
    if (desnaSlika) {
      ctxPot.drawImage(imgV1up, pointsS[t - 1].x + xOff*4,pointsS[t - 1].y + yOff,55,20);
      ctxPot.drawImage(imgV1up, pointsS[t].x + xOff*4, pointsS[t].y + yOff, 55, 20);
    }
    if (LevaSlika) {
      ctxPot.drawImage(imgV1down,pointsS[t - 1].x + xOff*4,pointsS[t - 1].y + yOff,55,20);
      ctxPot.drawImage(imgV1down, pointsS[t].x + xOff*4, pointsS[t].y + yOff, 55, 20);
    }
  }

  if (changeYs == pointsS[t].y && changeXs-pointsS[t].x > 0) {
    if (desnaSlika) {
      ctxPot.drawImage(imgV2up, pointsS[t - 1].x + xOff,pointsS[t - 1].y + yOff,55,20);
      ctxPot.drawImage(imgV2up, pointsS[t].x + xOff, pointsS[t].y + yOff, 55, 20);
    }
    if (LevaSlika) {
      ctxPot.drawImage(imgV2down,pointsS[t - 1].x + xOff,pointsS[t - 1].y + yOff,55,20);
      ctxPot.drawImage(imgV2down, pointsS[t].x + xOff, pointsS[t].y + yOff, 55, 20);
    }
  }

  if (changeXs == pointsS[t].x && changeYs-pointsS[t].y > 0) {
    if (desnaSlika) {
      ctxPot.drawImage(imgH1,pointsS[t - 1].x + xOff, pointsS[t - 1].y + yOff,20,55);
      ctxPot.drawImage(imgH1, pointsS[t].x + xOff, pointsS[t].y + yOff, 20, 55);
    }
    if (LevaSlika) {
      ctxPot.drawImage(imgH2,pointsS[t - 1].x + xOff,pointsS[t - 1].y + yOff,20,55);
      ctxPot.drawImage(imgH2, pointsS[t].x + xOff, pointsS[t].y + yOff, 20, 55);
    }
  }

  if (changeXs == pointsS[t].x && changeYs-pointsS[t].y < 0) {
    if (desnaSlika) {
      ctxPot.drawImage(imgH1down,pointsS[t - 1].x + xOff, pointsS[t - 1].y + yOff*4,20,55);
      ctxPot.drawImage(imgH1down, pointsS[t].x + xOff, pointsS[t].y + yOff*4, 20, 55);
    }
    if (LevaSlika) {
      ctxPot.drawImage(imgH2down,pointsS[t - 1].x + xOff,pointsS[t - 1].y + yOff*4,20,55);
      ctxPot.drawImage(imgH2down, pointsS[t].x + xOff, pointsS[t].y + yOff*4, 20, 55);
    }
  }

  changeXs = pointsS[t].x;
  changeYs = pointsS[t].y;
}

function changeImg() {
  if (desnaSlika == false) {
    desnaSlika = true;
    LevaSlika = false;
  } else {
    LevaSlika = true;
    desnaSlika = false;
  }
}

var bar = document.getElementsByClassName("bar")[0];

function update() {
  var val = prog-5;
  bar.style.setProperty("--progress", val + "%");
}
