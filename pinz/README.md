# Map Angular With pins onclick

Je ne sais pas si vous avez déjà essayé de trouver de la documentation complète sur "comment faire une map avec des pins générés au click souris avec angular"... Pour ma part, j'ai été assez surpris de voir qu'il existe moult tutos qui vous montrent comment afficher des pins mais pas d'en générer au click, vous trouvez aussi des tutos sur comment faire du data binding inter-composant, mais rien qui mèle le tout pour avoir un système fonctionnel.

Avec les quelques liens listés si dessous et quelques tests, j'ai pu faire ce petit composant. C'est juste une map angular sur laquelle on peut:
- avoir des pins, générés au click souris avec un titre et id qui s'incrémente, affiché au survole, stockés dans un tableau.
- au click sur un pin, on affiche ses coordonnées gps, un bouton pour le supprimer, un bouton info qui vous donne les data du mouse event correspondant dont nous avions besoin.

Il nécéssite une petite touche de CSS pour le rendre un peu moins piquant pour les yeux, mais il est fonctionnel en l'état. On pourrait par exemple l'utiliser associé à OSM (open street map) pour générer et afficher des trajets. J'ai dans l'idée d'essayer d'en faire mon premier tuto en ligne histoire de contribuer à la doc, cependant vous pouvez déjà l'essayer et l'intégrer dans vos apps.

**Pour lancer l'application**
Evidemment il vous faut avoir npm et l'angular CLI installés, puis:
`npm i && ng serve`
et direction 'http://localhost:4200'

# Liste des sources utilisées :

**Angular 10 with Leaflet map – geocoding using Nominatim API :**
https://blog.mestwin.net/use-leaflet-in-your-angular-8-project-for-interactive-maps/

https://blog.mestwin.net/angular-8-with-leaflet-map-geocoding-using-nominatim-api/

**Building Maps in Angular Using Leaflet, Part 1:**

**Generating Maps**
https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet

**Tuto 2ème partie :**
https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet-marker-service

**Tuto 3ème partie :**
https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet-popup-service

**Tuto 4ème partie :**
https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet-shape-service

**Tuto pinz :**
https://github.com/Asymmetrik/ngx-leaflet/blob/master/src/demo/app/leaflet/layers/markers-demo.component.ts

