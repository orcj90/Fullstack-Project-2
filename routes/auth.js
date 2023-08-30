const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

/* POST Auth listing. */
router.post('/register', authController.register);

router.post('/login', authController.login);

router.post('/logout', function (req, res, next) {
    res.send('respond from logout');
});

module.exports = router;
