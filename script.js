function load() {
  console.log("Load");
  var canvas = document.getElementById('voronoi');
  var ctx = canvas.getContext('2d');
  var data = ctx.getImageData(0, 0, canvas.width, canvas.height);
  data[0] = 255;
}
