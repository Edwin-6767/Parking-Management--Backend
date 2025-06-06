const express = require('express');
const { adduser,getuser } = require('../controller/usercontroller');

const router = express.Router();

router.post('/register', adduser);
router.get('/login', getuser);

module.exports = router;
