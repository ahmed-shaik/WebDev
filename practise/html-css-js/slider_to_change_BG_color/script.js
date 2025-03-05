const body = document.body;
const range = document.querySelector(".range");
const h2 = document.querySelector(".rangeValue");
range.addEventListener("input", () => {
  const value = Number(range.value);
  h2.innerText = value;
  console.log(typeof value);
  if (value >= 90) {
    body.style.backgroundColor = "#f5d300";
  } else if (value >= 70) {
    body.style.backgroundColor = "#fe53bb";
  } else if (value >= 50) {
    body.style.backgroundColor = "#09fbd3";
  } else if (value >= 25) {
    body.style.backgroundColor = "#08f7fe";
  } else if (value >= 0) {
    body.style.backgroundColor = "#333";
  }
});
