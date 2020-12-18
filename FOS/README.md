# FOS

## infos

Voici un petit morceau d'application tout fonctionnel qui pourrait servir de base à n'importe quel projet Angular + API NodeJs.
Un menu de navigation avec un layout, une sécurité par token, une déconnexion après un certains temps d'inactivité et une navigation totalement bloquée si non connecté.

## installation

* importez dans votre database le dumpSQL disponible dans le repertoire 'ressources' ci-joint, il contient un jeu de donné nécessaire au fonctionnement de l'application
* installer les node_modules, pour se faire, à la racine de l'app, mais aussi de l'api, lancez:
`npm i && npm audit fix`
* configurez le lien l'api à la database, plus d'infos information dans le readme de l'api
* lancez le tout! Après avoir lancé l'api, lancer le client angular, et rendez-vous à 'http://localhost:4200' pour tester!

## Ce que vous verrez

Au lancement de l'app vous êtes automatiquement dirigé sur le login: tapez comme login 'test' et aussi pour le password.
Après le login le menu s'affiche, vous pouvez tester la navigation, regardez l'url en passant. Testez alors pour voir si la sécurité fonctionne! Faites un logout et essayez de taper l'url 'http://localhost/home', vous verrez que vous serez redirigé au login, tout comme ci vous restez innactif plus d'une minute (le delai est volontairement bref pour que vous puissiez vous en rendre compte sans tuer votre temps). En outre, cliquez sur logo. Vous arriverez sur une page avec des boutons vilains comme tout, ils font des appels à la base de donnée via l'api et vous donne le contenu des table correspondante en json.