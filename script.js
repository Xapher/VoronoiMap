var data;
function load() {
  console.log("Load");
  var canvas = document.getElementById('voronoi');
  var ctx = canvas.getContext('2d');
  data = ctx.getImageData(0, 0, canvas.width, canvas.height);
  data[0] = 255;
  data[1] = 255;
  data[2] = 255;
  data[3] = 255;
}
