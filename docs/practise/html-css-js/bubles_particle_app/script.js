const container = document.querySelector(".container");

function bubble() {
  let span = document.createElement("span");
  let size = Math.random();
  span.style.width = 100 + size + "px";
  span.style.height = 100 + size + "px";
  span.style.top = Math.random() * innerHeight + "px";
  span.style.left = Math.random() * innerWidth + "px";
  container.appendChild(span);
  setTimeout(() => {
    span.remove();
  }, 2000);
}
setInterval(bubble, 300);
