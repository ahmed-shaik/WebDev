const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/Listing");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

main()
  .then(() => {
    console.log("connection to mongodb sucessful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

app.get("/", (req, res) => {
  res.send("App is working");
});

// app.get("/testListing", async (req, res) => {
//   let slisting = new Listing({
//     title: "Test Listing",
//     description: "This is a test listing",
//     image:
//       "https://images.unsplash.com/photo-1746768934174-dda0f666ac41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     price: 100,
//     location: "Test Location",
//     country: "Test Country",
//   });
//   await slisting
//     .save()
//     .then((data) => {
//       console.log("Test listing created successfully\n " + data);
//     })
//     .catch((err) => {
//       console.log("Error creating test listing: " + err.message);
//     });
//   console.log("successfully tested");
//   res.send(slisting);
// });

app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("./listings/index.ejs", { allListings });
});

app.listen(8080, () => {
  console.log("Listining at port 8080 ");
});
