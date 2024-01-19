const express = require("express");
const fetch = require("node-fetch");
const capsuleRouter = express.Router();
require("dotenv").config();
const url = 'https://api.spacexdata.com/v3/capsules';

capsuleRouter.get("/capsule", async (req, res) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});

module.exports = { capsuleRouter };
