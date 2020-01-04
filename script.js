var data;
function load() {
  console.log("Load");
  var canvas = document.getElementById('voronoi');
  var ctx = canvas.getContext('2d');
  
  data = ctx.createImageData(100, 100);
  data[0] = 0;
  data[1] = 0;
  data[2] = 0;
  data[3] = 255;
}
