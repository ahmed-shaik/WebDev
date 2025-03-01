const container = document.querySelector(".key-container");
container.innerHTML = generateHTML("-", "-", "-");
window.addEventListener("keydown", (event) => {
  container.innerHTML = generateHTML(
    event.key,
    event.code,
    event.key.charCodeAt(0)
  );
});
function generateHTML(key, code, value) {
  return `
    <div class="key-container">
        <h4>Key</h4>
        <div class="key-content">
            ${key === " " ? "Space" : key}
        </div>
    </div>
    <div class="key-container">
        <h4>Code</h4>
        <div class="key-content">
            ${code}
        </div>
    </div>
    <div class="key-container">
        <h4>Key Code</h4>
        <div class="key-content">
            ${value}
        </div>
    </div>
    `;
}
