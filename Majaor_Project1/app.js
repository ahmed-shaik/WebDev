const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/Listing");
const path = require("path");
const methodOverride = require("method-override");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

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

// index route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("./listings/index.ejs", { allListings });
});

// new route
app.get("/listings/new", (req, res) => {
  res.render("./listings/new.ejs");
});

//create route
app.post("/listings", async (req, res) => {
  const listing = req.body.listing;
  // console.log(listing);
  const newListing = await new Listing(listing);
  await newListing.save();
  res.redirect("/listings");
});

// edit route
app.get("/listings/:id/edit", async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("./listings/edit.ejs", { listing });
});

// update route
app.patch("/listings/:id", async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`);
});

// Destroy route
app.delete("/listings/:id", async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
});

// show route
app.get("/listings/:id", async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("./listings/show.ejs", { listing });
});

app.listen(8080, () => {
  console.log("Listining at port 8080 ");
});
