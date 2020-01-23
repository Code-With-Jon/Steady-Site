var express = require('express');
var router = express.Router();
var gameCtrl = require('../../controller/api/answers');

/* GET /api/puppies */
router.get('/', gameCtrl.index);
router.post('/', gameCtrl.create);

module.exports = router;