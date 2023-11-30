const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mouse = {
  x: undefined,
  y: undefined,
};

// canvas.addEventListener("click", (e) => {
//   mouse.x = e.x;
//   mouse.y = e.y;
//   drawCircle(mouse.x, mouse.y);
// });

canvas.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  drawCircle(mouse.x, mouse.y);
});

function drawCircle(x, y) {
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(x, y, 50, 0, Math.PI * 2);
  ctx.fill();
}
