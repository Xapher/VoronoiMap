var data;
function load() {
  console.log("Load");
  var canvas = document.getElementById('voronoi');
  var ctx = canvas.getContext('2d');
  
  data = ctx.createImageData(100, 100);
  data[0] = 255;
  data[1] = 255;
  data[2] = 255;
  data[3] = 255;
}
