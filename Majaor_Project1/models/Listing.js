const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1746768934174-dda0f666ac41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    set: (v) =>
      v === " "
        ? "https://images.unsplash.com/photo-1746768934174-dda0f666ac41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});
const Listing = new mongoose.model("Listing", listingSchema);

module.exports = Listing;
