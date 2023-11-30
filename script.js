const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

ctx.fillStyle = "yellow";
ctx.strokeStyle = "red";
ctx.lineWidth = 15;
ctx.beginPath();
ctx.arc(100, 150, 50, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();
