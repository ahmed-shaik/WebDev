let options = [
  { id: "1", text: "JavaScript", count: 0 },
  { id: "2", text: "Python", count: 0 },
  { id: "3", text: "Java", count: 0 },
  { id: "4", text: "C++", count: 0 },
];
function submitVote() {
  const selected = document.querySelector('input[type="radio"]:checked');
  if (!selected) {
    alert("Please select a programming language");
    return;
  }
  const optionId = parseInt(selected.value);
  options[optionId - 1].count++;
  console.log(options);
  displayResults();
}
function displayResults() {
  const results = document.querySelector(".result");
  results.innerHTML = "";
  options.forEach((option) => {
    const percentage = (option.count / getTotal()) * 100;
    const optRes = document.createElement("div");
    optRes.className = "opt-res";
    optRes.innerHTML = `
    <span class="opt-text">${option.text}</span>
    <div class="bar-container">
      <div class="bar" style="width: ${percentage.toFixed(2)}%"></div>  
    </div>
    <span class="percentage">${percentage.toFixed(2)}%</span>
    `;
    results.appendChild(optRes);
  });
}
function getTotal() {
  return options.reduce((total, option) => total + option.count, 0);
}
displayResults();
