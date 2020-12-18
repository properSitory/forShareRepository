var express = require('express');
var router = express.Router();
/* GET users listing. */
router.route('/').get(function (req, res, next) {
    // console.log('youpi tralala on est dans mon finderSQL')
    global.sequelize.query(req.message.sql_query, { type: sequelize.QueryTypes.SELECT }).populate().exec()
        .then(function (result) { // sql query success
            // console.log('listes des données : ', result);
            if (req.message.return_type == null) {
                // récupérer les données extraites de la base et les envoyées à une vue
                res.render(req.message.view, {
                    stitle: 'Connexion à BD SQL données Countries via Sequelize',
                    title: req.message.title,
                    libelle: req.message.libelle,
                    del_label: req.message.del_label,
                    form_action: req.message.form_action,
                    data: result  // Attention a renvoyer une variable avec un nom generique
                });
            } else {
                res.setHeader('content-type', 'application/json');
                res.send(result);
            }
        }).catch(function (err) { // sql query error
            console.log('error select', err);
        });
});

router.route('/:id').get(function (req, res, next) {
    console.log('******');
    console.log(req.params);
    console.log(req.message.action);
    const morceau = req.message.action.split('/')

    if(req.params.id.includes('&')){
        const theId = req.params.id.split('&')[0] // split sur le & pour recuperer l'id'
        console.log(theId);
        const args = req.params.id.split('&')[1] // split sur le & pour recuperer le reste

        global.sequelize.query(`SELECT * FROM ${args} WHERE ${morceau[1]}_id LIKE ${theId}`,
        {
            // replacements: params_value,
            type: sequelize.QueryTypes.SELECT
        })
        .then(function (result) { // sql query success
            console.log('listes des données : ', result);

            if (req.message.return_type == null) {
                // récupérer les données extraites de la base et les envoyées à une vue
                res.render(req.message.view, {
                    stitle: 'Connexion à BD SQL données Countries via Sequelize',
                    title: req.message.title,
                    libelle: req.message.libelle,
                    del_label: req.message.del_label,
                    form_action: req.message.form_action,
                    data: result[0]  // Attention a renvoyer une variable avec un nom generique
                });
            } else {
                res.setHeader('content-type', 'application/json');
                res.send(result);
            }
        }).catch(function (err) { // sql query error
            console.log('error select', err);
        });
    } else {
        global.sequelize.query(req.message.sql_query_by_id + req.params.id,
            {
                // replacements: params_value,
                type: sequelize.QueryTypes.SELECT
            })
            .then(function (result) { // sql query success
                console.log('listes des données : ', result);
    
                if (req.message.return_type == null) {
                    // récupérer les données extraites de la base et les envoyées à une vue
                    res.render(req.message.view, {
                        stitle: 'Connexion à BD SQL données Countries via Sequelize',
                        title: req.message.title,
                        libelle: req.message.libelle,
                        del_label: req.message.del_label,
                        form_action: req.message.form_action,
                        data: result[0]  // Attention a renvoyer une variable avec un nom generique
                    });
                } else {
                    res.setHeader('content-type', 'application/json');
                    res.send(result);
                }
            }).catch(function (err) { // sql query error
                console.log('error select', err);
            });
    }
    // ici on réalise une requête
    
    
});

// router.route('/:id&groups').get(function (req, res, next) {

//     console.log(req.params.id);

//     // ici on réalise une requête
//     global.sequelize.query(req.message.sql_query_by_id + req.params.id,
//         {
//             // replacements: params_value,
//             type: sequelize.QueryTypes.SELECT
//         })
//         .then(function (result) { // sql query success
//             console.log('listes des données : ', result);

//             if (req.message.return_type == null) {
//                 global.sequelize.query(`SELECT * from '${req.message.pop_ref}'`,
//                     {
//                         // replacements: params_value,
//                         type: sequelize.QueryTypes.SELECT
//                     })
//                     .then(function (result) {
//                         res.render(req.message.view, {
//                             stitle: 'Connexion à BD SQL données Countries via Sequelize',
//                             title: req.message.title,
//                             libelle: req.message.libelle,
//                             del_label: req.message.del_label,
//                             form_action: req.message.form_action,
//                             data: result[0]  // Attention a renvoyer une variable avec un nom generique
//                         });
//                     })
//                     .catch(function (err) { // sql query error
//                         console.log('error select', err);
//                     })
//                 // récupérer les données extraites de la base et les envoyées à une vue
//                 // res.render(req.message.view, {
//                 //     stitle: 'Connexion à BD SQL données Countries via Sequelize',
//                 //     title: req.message.title,
//                 //     libelle: req.message.libelle,
//                 //     del_label: req.message.del_label,
//                 //     form_action: req.message.form_action,
//                 //     data: result[0]  // Attention a renvoyer une variable avec un nom generique
//                 // });
//             } else {
//                 res.setHeader('content-type', 'application/json');
//                 res.send(result);
//             }
//         }).catch(function (err) { // sql query error
//             console.log('error select', err);
//         });
//     // .then(
//     //    // on fait un findAll par dessus pour generer la liste correspondante
//     //     global.sequelize.query(`SELECT * from '${req.message.pop_ref}'`,
//     //     {
//     //         // replacements: params_value,
//     //         type: sequelize.QueryTypes.SELECT
//     //     })
//     //     .then()
//     //     .catch()
//     // )
//     // .catch()
// });

module.exports = router;

