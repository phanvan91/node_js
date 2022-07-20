var express = require('express');
var router = express.Router();
const User = require('./../models/User');


const verifyToken = require('./../middlewares/verifyToken');

/* GET users listing. */
router.get('/', verifyToken ,(request, response) => {
  User.find({}).exec(function (err, users) {
    response.send(users);
  });
});

module.exports = router;
