var express = require('express');
var router = express.Router();
var subscriberCtrl = require('../../controller/api/subscribers');



router.post('/', subscriberCtrl.create);

module.exports = router