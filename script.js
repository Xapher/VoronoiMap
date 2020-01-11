var data;
var cx = Math.random() * 100, cy = Math.random() * 100;
var c2x = Math.random() * 100, c2y = Math.random() * 100;
var distances = "<p>";
var dend = "</p>";
var floats = new Array(100 * 100);
var max = 0;
var dA = 0, dB = 0;
function load() {
  
  console.log("Load");
  var canvas = document.getElementById('voronoi');
  var ctx = canvas.getContext('2d');
  data = ctx.createImageData(100, 100);
  var i;
  var m = distance(0,100,0,100);
  var count = 0;
  var tD = 0;
  for(var x = 0; x < 100; x++) {
      for(var y = 0; y < 100; y++) {
          //distances = distances + distance(cx, x, cy, y).toString() + '\n';
          dA = distance(cx, x, cy, y);
          dB = distance(c2x, x, c2y, y);
          if(dA < dB) {
            tD = distance(cx, x, cy, y);
          }
          else {
            tD = distance(c2x, x, c2y, y);        
          }
          data.data[count * 4] = (255 * (1 - (tD / max)));
          data.data[(count * 4) + 1] = data.data[count * 4];
          data.data[(count * 4) + 2] = data.data[count * 4];
          data.data[(count * 4) + 3] = 255;
          count = count + 1;
      }
  }
  document.getElementById('filler').innerHTML = m;
  ctx.putImageData(data, 0, 0);
}

function distance(x1,x2,y1,y2) {
  return Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1))); 
}
