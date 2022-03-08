const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.fillStyle = "white";
ctx.moveTo(250, 75);
ctx.arc(250, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(280,75);
ctx.arc(250,75,35,0, Math.PI , false); // Mouth (Clockwise)
ctx.moveTo(65,65);
ctx.strokeStyle = "red";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.lineWidth = 10;
ctx.moveTo(250, 75);
ctx.lineTo(250, 250);
ctx.lineTo(200, 400);
ctx.moveTo(250, 250);
ctx.lineTo(300, 400);
ctx.moveTo(250, 150);
ctx.lineTo(100, 200);
ctx.moveTo(250, 150);
ctx.lineTo(400, 200);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(225,65,10, 0, Math.PI * 2, true); // Left Eye
ctx.fill();
ctx.moveTo(280,65);
ctx.stroke();
ctx.closePath();


ctx.fillStyle = "red";
ctx.arc(275,65,10, 0, Math.PI * 2, true); // Left Eye
ctx.fill();
ctx.stroke();
ctx.closePath();
