var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Filled Rectangle (neatly positioned)
ctx.fillStyle = "pink";
ctx.fillRect(40, 50, 180, 80);

// Filled Circle (aligned to rectangle)
ctx.beginPath();
ctx.arc(320, 90, 45, 0, 2 * Math.PI);
ctx.fillStyle = "skyblue";
ctx.fill();

// Straight Line
ctx.beginPath();
ctx.moveTo(60, 190);
ctx.lineTo(440, 190);
ctx.strokeStyle = "purple";
ctx.lineWidth = 2;
ctx.stroke();

// Text
ctx.font = "24px Arial";
ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.fillText("HTML5 Canvas", canvas.width / 2, 250);
