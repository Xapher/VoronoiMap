var data;
var points = 10;
var iX, iY;
var distances = "<p>";
var dend = "</p>";
var max = 0;
var dA = 0, dB = 0;
function load() {
  iX = new Array(points * points);
  iY = new Array(points * points);
  console.log("Load");
  var canvas = document.getElementById('voronoi');
  var ctx = canvas.getContext('2d');
  data = ctx.createImageData(100, 100);
  var i;
  var m = distance(0,100,0,100) / points;
  var count = 0;
  var tD = 100;
  var off = 100 / points;
  var index = 0;
  for(var x = 0; x < points; x++) {
    for(var y = 0; y < points; y++) {
      var offX = ((x * off) + ((Math.random() * 10) + ((off/2))));
      var offY = ((y * off) + ((Math.random() * 10) + ((off/2))));
      iX[index] = offX;
      iY[index] = offY;
      index = index + 1;
    }
  }
  
  
  for(var x = 0; x < 100; x++) {
      for(var y = 0; y < 100; y++) {
          //distances = distances + distance(cx, x, cy, y).toString() + '\n';
          for(var i = 0; i < points * points; i++) {
             if(distance(offX[i], x, offY[i], y) < tD){
               tD =  distance(offX[i], x, offY[i], y);
             }
          }
          data.data[count * 4] = (255 * (1 - (tD / m)));
          data.data[(count * 4) + 1] = data.data[count * 4];
          data.data[(count * 4) + 2] = data.data[count * 4];
          data.data[(count * 4) + 3] = 255;
          tD = 100;
          count = count + 1;
      }
  }
  document.getElementById('filler').innerHTML = m;
  ctx.putImageData(data, 0, 0);
}

function distance(x1,x2,y1,y2) {
  return Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1))); 
}
