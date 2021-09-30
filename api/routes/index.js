const { Router } = require('express');
const { showMessage } = require('../controllers/user.js')

const router = Router();

router.get('/api/:message', showMessage);

module.exports = router;
