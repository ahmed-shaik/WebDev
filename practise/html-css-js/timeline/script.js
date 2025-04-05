const circles = document.querySelectorAll(".circle");
let count = 1;
const prev = document.querySelector("#previous");
const next = document.querySelector("#next");
next.addEventListener("click", () => {
  count++;
  for (var i = 1; i < count; i++) {
    circles[i].classList.add("active");
  }
  if (count == 5) {
    next.disabled = true;
  }
  prev.disabled = false;
  setWidth();
});
prev.addEventListener("click", () => {
  count--;
  circles[count].classList.remove("active");
  if (count == 1) {
    prev.disabled = true;
  }
  next.disabled = false;
  setWidth();
});
function setWidth() {
  const timeline = document.querySelector(".timeline");
  timeline.style.width = `${((count - 1) / (circles.length - 1)) * 100}%`;
}
