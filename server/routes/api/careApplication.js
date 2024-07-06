// server/routes/api/careApplication.js

const router = require("express").Router();
const CareProgramApplication = require("../../models/CareProgramApplication");

router.post("/", async (req, res) => {
    try {
        const { first_name, last_name, email, number_of_children, commitments } = req.body;

        // Validate required fields
        if (!first_name || !last_name || !email || number_of_children == null || !commitments) {
            return res.status(400).json({ error: "Please provide all required fields." });
        }

        // Validate number_of_children
        if (number_of_children < 0) {
            return res.status(400).json({ error: "Number of children cannot be negative." });
        }

        // Create new care application
        const newApplication = await CareProgramApplication.create({
            first_name,
            last_name,
            email,
            number_of_children,
            commitments,
        });

        res.status(201).json(newApplication);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to submit care application." });
    }
});

module.exports = router;