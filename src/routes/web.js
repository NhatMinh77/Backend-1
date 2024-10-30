const express = require('express');

const { getHomepage, getSer, postCreateUser } = require('../controllers/homeController');

const router = express.Router();

//router.Method('/router', handler)
router.get('/baicuoiki', getHomepage);

router.get('/baicuoiki1', getSer);

router.post('/create-user', postCreateUser);
//export default
module.exports = router;