const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 20;
let speed = 2;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, 100, 20, 0, Math.PI * 2);
  ctx.fillStyle = '#ff69b4';
  ctx.fill();
  x += speed;
  if (x > canvas.width - 20 || x < 20) speed *= -1;
  requestAnimationFrame(animate);
}

animate();
