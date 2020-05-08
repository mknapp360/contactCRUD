const express = require('express');
const router = express.Router();

// @route   POST  api/users
// @desc    register a user
//@access   Public access
router.post('/', (req, res) => {
    res.send('Register a user');
});

module.exports = router;