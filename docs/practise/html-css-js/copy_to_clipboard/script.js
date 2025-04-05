const button = document.querySelector("#copy");
const para = document.querySelector("#main");
const msg = document.querySelector(".message");

button.addEventListener("click", () => {
  //   navigator.clipboard.writeText(para.innerText);
  //   msg.classList.add("after-clicked");
  //   setTimeout(() => {
  //     msg.classList.remove("after-clicked");
  //   }, 1000);
  navigator.clipboard
    .writeText(para.textContent)
    .then(() => {
      //   msg.style.display = "block";
      msg.classList.add("after-clicked");
    })
    .catch((err) => {
      console.error("Error copying text: ", err);
    })
    .finally(() => {
      setTimeout(() => {
        msg.classList.remove("after-clicked");
        // msg.style.display = "none";
      }, 2000);
    });
});
