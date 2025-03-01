const container = document.querySelector(".container");
function drop() {
  const span = document.createElement("span");
  span.classList.add("drop");
  span.style.top = Math.random() * innerHeight + "px";
  span.style.left = Math.random() * innerWidth + "px";
  setInterval(() => {
    span.remove();
  }, 6500);
  container.appendChild(span);
}
setInterval(drop, 500);
