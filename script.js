var data;
var cx = 35, cy = 82;
var distances = "<p>";
var dend = "</p>";
var floats = new Array(100 * 100);
var max = 0;
function load() {
  
  console.log("Load");
  var canvas = document.getElementById('voronoi');
  var ctx = canvas.getContext('2d');
  
  data = ctx.createImageData(100, 100);
  var i;
  var m = distance(cx,0,cy,0);
  if(m > max) {
    max = m;
  }
  m = distance(cx,0,cy,100);
  if(m > max) {
     max = m;
  }
  m = distance(cx,100,cy,0);
  if(m > max) {
    max = m;
  }
  m = distance(cx,100,cy,100);
  if(m > max) {
    max = m;
  }
  var count = 0;
  for(var x = 0; x < 100; x++) {
      for(var y = 0; y < 100; y++) {
          //distances = distances + distance(cx, x, cy, y).toString() + '\n';
          data.data[count] = (255 * (distance(cx, x, cy, y) / max));
          data.data[count + 1] = data.data[count];
          data.data[count + 2] = data.data[count];
          data.data[count + 3] = 255;
          count = count + 1;
      }
  }
  document.getElementById('filler').innerHTML = m;
  ctx.putImageData(data, 0, 0);
}

function distance(x1,x2,y1,y2) {
  return Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1))); 
}
