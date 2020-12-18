var express = require('express');
var router = express.Router();
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
// les 4 lignes suivantes 
// router.get('/', function(req, res) {
// 	user.getAllUsers().then(user => res.json(user)); 
// });
var jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'secret';
let strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
    console.log('payload received', jwt_payload);
    var user = require('../models/users')
    let user = user.getUser({ id: jwt_payload.id });
    if (user) {
        next(null, user);
    } else {
        next(null, false);
    }
});
// use the strategy
passport.use(strategy);

// var passport = require("passport");
// const jwt = require('jsonwebtoken');


// passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
//   // console.log('jwt_payload_received',jwt_payload);
//   User.findOne({ where: { login: 'gela' } }, function (err, user) {
//     if (err) {
//       return done(err, false);
//     }
//     if (user) {
//       return done(null, user);
//     } else {
//       return done(null, false);
//       // or you could create a new account
//     }
//   });
// }));

// // //  ****  écriture correcte pour recevoir le Req.body et res ****
// router.route('/').post(async (req,res) => { 
// 	console.log(req.body);
// 	// ca plante ici !!!!!!!!!!!!!!!!!!!!!!!!!!! *************** <<<<<=================
// 	// passport.authenticate('jwt', { session: false }, async (error, token) => {
// 	// 	console.log(error,token);
// 	//   if (error || !token) {
// 	// 	return res.send({ message: 'Unauthorized' });
// 	//   }
// 	//   try {
// 	// 	const user = await User.findOne({
// 	// 	  where: { id: token.id },
// 	// 	});
// 	// 	req.user = user;
// 	//   } catch (error) {
// 	// 	next(error);
// 	//   }
// 	//   next();
// 	// });
// });


module.exports = router;