const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/Listing.js");

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

const initDB = async () => {
  await Listing.deleteMany({});
  console.log("All listings deleted");

  await Listing.insertMany(initdata.data);
  console.log("All listings added");
};

initDB();
