var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require("fs");
var session = require('express-session');
var passport = require("passport");
const jwt = require('jsonwebtoken');
var cors = require('cors')
require('dotenv').config()

/* Chargement du fichier de configuration générale*/
global.config = JSON.parse(fs.readFileSync("./config_db.json", "utf8"));

/*chargement de la configuration JSON des actions*/
global.actions_json = JSON.parse(fs.readFileSync("./routes/config_actions.json", "utf8"));

var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function () {
  console.log('partials registered');
});

hbs.registerHelper('compare', function (lvalue, rvalue, options) {
  if (arguments.length < 3)
    throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
  var operator = options.hash.operator || "==";
  var operators = {
    '==': function (l, r) {
      return l == r;
    }
  }
  if (!operators[operator])
    throw new Error("'compare' doesn't know the operator " + operator);
  var result = operators[operator](lvalue, rvalue);
  if (result) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

var Sequelize = require("sequelize");
global.sequelize = new Sequelize(config.sequelize.databaseName, config.sequelize.userName, config.sequelize.password, {
  host: config.sequelize.host,
  dialect: config.sequelize.dialect,
  pool: { max: 5, min: 0, idle: 10000 },
  dialectOptions: {
    timezone: 'Etc/GMT+1'
  }
});

sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  name: 'sessionTest',
  secret: 'AsipfGjdp*%dsDKNFNFKqoeID1345', // cette clef n'est pas privée
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } 
}));

const userS = require('./models/users')
const passportJWT = require('passport-jwt');
let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'wowwow';

let strategy = new JwtStrategy(jwtOptions, function (jwt_payload, done) {
  let user = userS.getUser({ id: jwt_payload.id });
  if (user) {
    return done(null, user);
  } else {
    return done(null, false);
  }
});

passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());
app.post('/login', async function (req, res, next) {
  const { login, password } = req.body;
  if (login && password) {
    let user = await userS.getUser({ login });
    if (!user) {
      res.status(401).json({ msg: 'No such user found', user });
    }
    if (user.password === password) {
      let payload = { id: user.id };
      let token = jwt.sign(payload, jwtOptions.secretOrKey);
      res.json({ msg: 'ok', token: token });
    } else {
      res.status(401).json({ msg: 'Password is incorrect' });
    }
  }
});

require('./dynamicRouter')(app);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
