var example = document.getElementById('example')
var ctx = example.getContext('2d')
ctx.fillStyle = "Yellow"

ctx.beginPath();
ctx.arc(75,75,50,0, Math.PI * 2, true);// Outer Circle
ctx.fill();

ctx.moveTo(110,75);
ctx.arc(75,75,35,0, Math.PI, false); // Mouth (Clockwise)
ctx.moveTo(65,65);
ctx.strokeStyle = "black";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(60,65,5,0, Math.PI * 2, true); // Left Eye
ctx.fill();

ctx.moveTo(90, 65);
ctx.arc(90,65,5,0, Math.PI * 2, true); //Right Eye
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();
ctx.clockPath();