
var express = require('express');
var router = express.Router();



// register route
router.post('/register', function (req, res, next) {
    const { name, password } = req.body;
    createUser({ name, password }).then(user =>
        res.json({ user, msg: 'account created successfully' })
    );
});

module.exports = router;