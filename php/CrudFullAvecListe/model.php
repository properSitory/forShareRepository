<?php
$db = new PDO(
    'mysql:host=localhost;dbname=evalphp;charset=utf8',
    '',
    '', //configurez ici vos identifiant et mdp phpmyadmin
    array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)
);


//function de recuperations des eleves depuis la base de donnée
function reads_eleves($db)
{
    //Stocker les eleves de la bd
    $tableau_eleves = [];

    //Requete SQL et selectionne tous les champs de la table eleve
    $sql = 'SELECT * FROM eleves';

    // exécute la requête et stock les resultats
    $result = $db->query($sql);

    //Parcour les resultats ($result) et organise dans ($tableau_eleves)
    while ($ligne = $result->fetch()) {
        $tableau_eleves[$ligne['id']] = $ligne;
    }
    // retourne le tableau des eleves
    return $tableau_eleves;
}

//fonction pour supprimer
function delete_eleves($db, $id)
{
    //requete sql, supprime l'id de la table eleves
    $sql = "DELETE FROM eleves WHERE id=:id";

    //prepare la requete
    $req = $db->prepare($sql);

    //affecte à la variable PDO "id", la valeur contenue dans la variable $id
    // et verifie que le type est bien un entier
    $req->bindValue("id", $id, PDO::PARAM_INT);

    //execute la requete
    $req->execute();
}

function create_eleves($db, $nom, $prenom, $genre, $email, $dtn, $tel)
{
    //requete sql
    $sql = "INSERT INTO eleves (nom,prenom,genre,email,dateNaissance,tel) VALUES(:nom,:prenom,:genre,:email,:dateNaissance,:tel)";

    //prepare la requete
    $req = $db->prepare($sql);

    //affecte aux variables pdo les valeurs contenues dans les variables
    $req->bindValue("nom", $nom, PDO::PARAM_STR);
    $req->bindValue("prenom", $prenom, PDO::PARAM_STR);
    $req->bindValue("genre", $genre, PDO::PARAM_STR);
    $req->bindValue("email", $email, PDO::PARAM_STR);
    $req->bindValue("dateNaissance", $dtn, PDO::PARAM_STR);
    $req->bindValue("tel", $tel, PDO::PARAM_STR);

    //execute la requete
    $req->execute();
}

//fonction qui permet de lire un eleve
function read_eleve($db, $id)
{
    //requete sql
    $sql = "SELECT * FROM eleves WHERE id= :id";

    //prepare la requete
    $req = $db->prepare($sql);

    //affecte la valeur (id)
    $req->bindValue("id", $id, PDO::PARAM_INT);

    //execute la requete
    $req->execute();

    return $req->fetch();
}

function update_eleves($db, $nom, $prenom, $genre, $email, $dtn, $tel, $id)
{
    //requete sql
    $sql = "UPDATE eleves 
          SET nom=:nom,prenom=:prenom,genre=:genre,email=:email,dateNaissance=:dateNaissance,tel=:tel
          WHERE id=:id";


    //prepare la requete
    $req = $db->prepare($sql);

    //affecte aux variables pdo les valeurs contenues dans les variables
    $req->bindValue("nom", $nom, PDO::PARAM_STR);
    $req->bindValue("prenom", $prenom, PDO::PARAM_STR);
    $req->bindValue("genre", $genre, PDO::PARAM_STR);
    $req->bindValue("email", $email, PDO::PARAM_STR);
    $req->bindValue("dateNaissance", $dtn, PDO::PARAM_STR);
    $req->bindValue("tel", $tel, PDO::PARAM_STR);
    $req->bindValue("id", $id, PDO::PARAM_INT);

    //execute la requete
    $req->execute();
}
