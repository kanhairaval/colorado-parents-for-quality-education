const router = require("express").Router(); //Importing the built-in routing functionality from the express module

const userDonation = require("./userDonation"); // Importing the user donation route

router.use("/userDonation", userDonation); //Custom middleware using the router functionality asking the application to serve the file userDonation when that route is reached

const careApplication = require("./careApplication"); // Importing the care application route

console.log("routes/api/index.js: Setting up /userDonation and /careApplication routes");
router.use("/careApplication", careApplication); //Custom middleware using the router functionality asking the application to serve the file careApplication when that route is reached

module.exports = router;