var data;
var cx = 235, cy = 312;
function load() {
  
  console.log("Load");
  var canvas = document.getElementById('voronoi');
  var ctx = canvas.getContext('2d');
  
  data = ctx.createImageData(100, 100);
  var i;
  for(var x = 0; x < 100; x++) {
      for(var y = 0; y < 100; y++) {
          distances = dinstances + distance(cx, x, cy, y).toString() + "/r/n"; 
      }
  }
  document.getElementById('filler').innerHtml = distances + dend;
  ctx.putImageData(data, 0, 0);
}
var distances = "<p>";
var dend = "</p>";
function distance(x1,x2,y1,y2) {
  return Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1))); 
}
