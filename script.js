var data;
var points = 10;
var iX, iY;
var distances = "<p>";
var dend = "</p>";
var max = 0;
var dA = 0, dB = 0;
var count = 0;
var width = 1200;


function load() {
  iX = new Array((points * points) * 9);
  iY = new Array((points * points) * 9);
  console.log("Load");
  var canvas = document.getElementById('voronoi');
  canvas.width = width;
  canvas.height = width;
  var ctx = canvas.getContext('2d');
  data = ctx.createImageData(width, width);
  Math.seed = 321624561520546 * Math.random();
  bubbleMap();
  ctx.putImageData(data, 0, 0);
}

function bubbleMap() {
  var m = distance(0,width,0,width) / points;
  var tD = width;
  var off = width / points;
  var index = 0;
  var i;
  var sD = width;
  var sum = 0;
  for(var x = 0; x < points; x++) {
    for(var y = 0; y < points; y++) {
      //var offX = ((x * off) + ((Math.random() * (off / 2)) + (Math.random() * -(off / 2))));
      //var offY = ((y * off) + ((Math.random() * (off / 2)) + (Math.random() * -(off / 2))));
      var offX = Math.random() * width;
      var offY = Math.random() * width;
      var vx = offX + 0;
      var vy = offY + 0;
      iX[index] = offX;
      iY[index] = offY;
      vx = offX - width;
      vy = offY - width;
      index = index + 1;
      
      iX[index] = vx;
      iY[index] = vy;
      vx = offX - width;
      vy = offY;
      index = index + 1;
      
      
      iX[index] = vx;
      iY[index] = vy;
      vx = offX - width;
      vy = offY + width;
      index = index + 1;
      
      iX[index] = vx;
      iY[index] = vy;
      vx = offX;
      vy = offY + width;
      index = index + 1;
      
      iX[index] = vx;
      iY[index] = vy;
      vx = offX + width;
      vy = offY + width;
      index = index + 1;
      
      
      iX[index] = vx;
      iY[index] = vy;
      vx = offX + width;
      vy = offY;
      index = index + 1;
      
      iX[index] = vx;
      iY[index] = vy;
      vx = offX + width;
      vy = offY - width;
      index = index + 1;
      
      iX[index] = vx;
      iY[index] = vy;
      vx = offX;
      vy = offY - width;
      index = index + 1;
    }
  }
  for(var x = 0; x < width; x++) {
      for(var y = 0; y < width; y++) {
          //distances = distances + distance(cx, x, cy, y).toString() + '\n';
          for(var i = 0; i < (points * points) * 9; i++) {
             if(distance(iX[i], x, iY[i], y) < tD){
               tD =  distance(iX[i], x, iY[i], y);
             }
          }
          for(var i = 0; i < (points * points) * 9 ; i++) {
             if(distance(iX[i], x, iY[i], y) < sD && distance(iX[i], x, iY[i], y) > tD){
               sD =  distance(iX[i], x, iY[i], y);
             }
          }
          sum = tD + sD;
          sum = sum / 2;
          var c = (255 * (1 - (tD / sum)));
          data.data[count * 4] = c;
          data.data[(count * 4) + 1] = c;
          data.data[(count * 4) + 2] = c;
          data.data[(count * 4) + 3] = 255;
          tD = width;
          sD = width;
          count = count + 1;
      }
  }
}

function distance(x1,x2,y1,y2) {
  return Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1))); 
}


function getRandomSeeded(min,max) {
    max = max || 1;
    min = min || 0;
 
    Math.seed = (Math.seed * 9301 + 49297) % 233280;
    var rnd = Math.seed / 233280;
 
    return min + rnd * (max - min);
}
