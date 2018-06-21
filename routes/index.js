var express = require('express');
var router = express.Router();
const indexController = require('../controller/indexController')
/* GET home page. */


router.get('/', indexController.homePage);

router.get('/table', indexController.table);
module.exports = router;
