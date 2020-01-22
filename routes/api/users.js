const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controller/users');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
// router.get('/:id', usersCtrl.somethingHere)
router.post('/login', usersCtrl.login);


/*---------- Protected Routes ----------*/




module.exports = router;