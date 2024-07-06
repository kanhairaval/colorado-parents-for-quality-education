// server/routes/api/donation.js

const router = require("express").Router();
const UserDonationInfo = require("../../models/UserDonationInfo");

router.post("/", async (req, res) => {
    try {
        const { first_name, last_name, email, amount } = req.body;

        // Validate required fields
        if (!first_name || !last_name || !email || !amount) {
            return res.status(400).json({ error: "Please provide all required fields." });
        }

        // Validate amount
        if (amount < 0) {
            return res.status(400).json({ error: "Donation amount cannot be negative." });
        }

        // Create new donation entry
        const newDonation = await UserDonationInfo.create({
            first_name,
            last_name,
            email,
            amount,
        });

        res.status(201).json(newDonation);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to process donation." });
    }
});

module.exports = router;