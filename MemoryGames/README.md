# MemoryGames

Ecrivez un jeu de Memory de taille 4 colonnes x 5 lignes (images et structure html fournies).
Un premier écran affiche le top 3 (nom du joueur + temps de résolution en secondes + date-heure de la partie); on affiche aussi en dessous une zone de saisie du pseudo et un bouton "Démarrer" (grisé si pseudo vide).
La partie s'affiche alors dans une nouvelle page. A la fin du jeu (dernière paire trouvée), on revient à la page d'accueil.

Déroulement du jeu:
Au début, les images sont affichées "cachées" (coté "greta"); au premier clic, on dévoile l'image; au clic sur une autre carte cachée, on dévoile la 2eme carte; Si elles font la paire, elles restent visibles définitivement; Sinon les 2 cartes redeviennent cachées après 1 seconde.

Règles supplémentaires:
- Si on dévoile le lama en 1ere carte, puis le gorille en 2eme carte, on annule les 2 premières paires trouvées de la partie, qui redeviennent cachées (maximum).
- Si on dévoile l'écureuil en 1ere carte, puis le poney en 2eme carte, on dévoile une girafe (si possible)
- Si on dévoile le kangourou en 1ere carte, puis le lémurien en 2eme carte, toutes les cartes sont dévoilées pendant 2 secondes, puis re-cachées (celles qui l'étaient), puis la règle ne s'applique plus.

Oeuf de paques:
Si on clique 5 fois d'affilée sur une carte cachée (n'importe laquelle), on écrit dans la console développeur : "We <3 Rémy"