var express = require("express");
var router = express.Router();
var passport = require("passport");
const userS = require('./models/users')

function dynamicRouter(app) {
    appContext = app;
    app.get('*', function (req, res, next) {
        passport.authenticate('jwt', { session: true }, function (err, user, info) {
            passport.serializeUser((user, done) => {
                user.then(data => {
                    user = data.dataValues
                    done(null, user.id);
                }).catch(err => console.log(err))
            });
            passport.deserializeUser((id, done) => {
                userS.getUser({ id })
                    .then((user) => {
                        done(null, user);
                    })
                    .catch((error) => {
                        console.log(`Error: ${error}`);
                    });
            });
            if (err) { return next(err); }
            if (!user) { return res.json("Vous n'êtes pas authentifié"); }
            next()
        })(req, res, next);
    });
    router.use(manageAction);
    appContext.use(router);
}

function manageAction(req, res, next) {
    req.message = {};
    var path = req.originalUrl;
    if (path.split('/').length > 0) path = '/' + path.split('/')[1]
    var type = req.method;
    req.message.action = type + path;
    if (global.actions_json[req.message.action].controler != null) {
        req.message.controler = global.actions_json[req.message.action].controler;
    }
    if (global.actions_json[req.message.action].modelName != null) {
        req.message.modelName = global.actions_json[req.message.action].modelName;
    }
    if (global.actions_json[req.message.action].view != null) {
        req.message.view = global.actions_json[req.message.action].view;
    }
    if (global.actions_json[req.message.action].return_type != null) {
        req.message.return_type = global.actions_json[req.message.action].return_type;
    }
    if (global.actions_json[req.message.action].pop_ref != null) {
        req.message.pop_ref = global.actions_json[req.message.action].pop_ref;
    }
    if (global.actions_json[req.message.action].modelList != null) {
        req.message.modelList = global.actions_json[req.message.action].modelList;
    }
    if (global.actions_json[req.message.action].sql_query != null) {
        req.message.sql_query = global.actions_json[req.message.action].sql_query;
    }
    if (global.actions_json[req.message.action].sql_query_by_id != null) {
        req.message.sql_query_by_id = global.actions_json[req.message.action].sql_query_by_id;
    }
    if (global.actions_json[req.message.action].params_query != null) {
        req.message.params_query = global.actions_json[req.message.action].params_query;
    }
    if (global.actions_json[req.message.action].title != null) {
        req.message.title = global.actions_json[req.message.action].title;
    }
    if (global.actions_json[req.message.action].form_action != null) {
        req.message.form_action = global.actions_json[req.message.action].form_action;
    }
    if (global.actions_json[req.message.action].libelle != null) {
        req.message.libelle = global.actions_json[req.message.action].libelle;
    }
    if (global.actions_json[req.message.action].del_label != null) {
        req.message.del_label = global.actions_json[req.message.action].del_label;
    }
    if (global.actions_json[req.message.action].redirect != null) {
        req.message.redirect = global.actions_json[req.message.action].redirect;
    }
    if (typeof global.actions_json[req.message.action] == 'undefined') {
        console.log("Erreur: Pas d'action dans l'annuaire config_actions.json : " + path);
        next();
    }
    else {
        instanceModule = require('./routes/' + req.message.controler);
        router.use(path, instanceModule);
        next();
    }
}

module.exports = dynamicRouter;