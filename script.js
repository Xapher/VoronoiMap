function load() {
  console.log("Load");
  var canvas = document.getElementById('voronoi');
  var ctx = canvas.getContext('2d');
  var myImageData = ctx.createImageData(400, 400);
  
  ctx.fillStyle = "rgba(125,250,25,255)";
  ctx.fillRect( 200, 200, 1, 1 );
  
}
