const router = require("express").Router();
const CareProgramApplication = require("../../models/CareProgramApplication");

router.post("/", async (req, res) => {
    try {
        console.log("Incoming request body:", req.body); // Log incoming request body

        const { first_name, last_name, email, number_of_children, commitments } = req.body;

        // Validate required fields
        if (!first_name || !last_name || !email || number_of_children == null || !commitments) {
            console.log("Validation failed: Required fields missing.");
            return res.status(400).json({ error: "Please provide all required fields." });
        }

        // Validate number_of_children
        if (number_of_children < 0) {
            console.log("Validation failed: Number of children is negative.");
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

        console.log("New application created:", newApplication); // Log newly created application object

        res.status(201).json(newApplication);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to submit care application." });
    }
});

module.exports = router;