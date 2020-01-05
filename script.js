var data;
var x = 235,y = 312;
function load() {
  console.log("Load");
  var canvas = document.getElementById('voronoi');
  var ctx = canvas.getContext('2d');
  
  data = ctx.createImageData(100, 100);
  var i;
for (i = 0; i < data.data.length; i += 4) {
  data.data[i+0] = 25;
  data.data[i+1] = 0;
  data.data[i+2] = 0;
  data.data[i+3] = 255;
}
  ctx.putImageData(data, 0, 0);
}
