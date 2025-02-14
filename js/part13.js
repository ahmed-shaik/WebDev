// Axios
// Library to make HTTP requests.
// it internally uses fetch but it is a better method to call an api.
// from axios we dont have to pase the data we get the ready to use data.

let url = "https://catfact.ninja/fact";
let dog = "https://dog.ceo/api/breeds/image/random";
async function getFacts() {
  try {
    let res = await axios.get(url); //fetch takes time as it calls api so if we log it may print undefined so we use await
    return res.data.fact;
  } catch (err) {
    console.log(err);
    return "No fact";
  }
}
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let fact = await getFacts();
  let p = document.querySelector("p");
  p.innerText = fact;
});
async function getImage() {
  try {
    let res = await axios.get(dog);
    return res.data.message;
  } catch (err) {
    console.log(err);
    return "No image";
  }
}
let btn2 = document.querySelector("#dog");
btn2.addEventListener("click", async () => {
  let src = await getImage();
  let img = document.querySelector("img");
  img.setAttribute("src", src);
});

async function getJokes() {
  try {
    const config = { headers: { Accept: "application/json" } };
    let res = await axios.get("https://icanhazdadjoke.com/", config); // to change the header
    console.log(res.data.joke);
  } catch (err) {
    console.log(err);
  }
}

let url2 = "http://universities.hipolabs.com/search?=";
let country = "nepal";
async function h() {
  let res = await axios.get(url2 + country);
  console.log(res.data);
}
