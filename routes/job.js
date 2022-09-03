const express = require('express');
const router = express.Router();
const { Job } = require('../models');

router.get('/get-all', async (req, res) => {
    const jobs = await Job.findAll();
    res.json(jobs);
});

router.post('/create', async (req, res) => {
    const { wallet, amount, jobDescription } = req.body;
    const job = await Job.create({ wallet, amount, jobDescription });
    res.json(job);
});

module.exports = router;