const router = require("express").Router(); //Importing the built-in routing functionality from the express module

const userDonation = require("./userDonation"); // Importing the user donation route

router.use("./userDonation", userDonation);//Custom middleware using the router functionality asking the application to serve the file userDonation when that route is reached

module.exports = router;