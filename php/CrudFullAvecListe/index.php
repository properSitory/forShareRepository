<?php
require_once 'model.php';
require_once 'functions.php';

//s'il existe dans l'URL, je le supprime
if (isset($_GET['del'])) {
    delete_eleves($db, $_GET['del']);
}

// si on appuie sur le champ POST['valider'] existe , on valide un élève
if (isset($_POST['valider'])) {
    $dateNaissance = $_POST['year'] . "-" . $_POST['month'] . "-" . $_POST['day'];
    if (isset($_GET['edit'])) {
        update_eleves($db, $_POST['nom'], $_POST['prenom'], $_POST['genre'], $_POST['email'], $dateNaissance, $_POST['telephone'], $_GET['edit']);
    } else {
        create_eleves($db, $_POST['nom'], $_POST['prenom'], $_POST['genre'], $_POST['email'], $dateNaissance, $_POST['telephone']);
    }
}

$tableau_eleve_modifie = "";
$nom_modif = "";
$prenom_modif = "";
$genre_modif = "";
$email_modif = "";
$dateNaissance_modif = [];
$tel_modif = "";

if (isset($_GET['edit'])) {
    $tableau_eleve_modifie = read_eleve($db, $_GET['edit']);
    $nom_modif = $tableau_eleve_modifie['nom'];
    $prenom_modif = $tableau_eleve_modifie['prenom'];
    $genre_modif = $tableau_eleve_modifie['genre'];
    $email_modif = $tableau_eleve_modifie['email'];
    $dateNaissance_modif = explode("-", $tableau_eleve_modifie['dateNaissance']);
    $tel_modif = $tableau_eleve_modifie['tel'];
}
?>

<!doctype html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <table>
        <tr>
            <td>id</td>
            <td>nom</td>
            <td>prenom</td>
            <td>genre</td>
            <td>email</td>
            <td>date de naissance</td>
            <td>telephone</td>
        </tr>
        <?php
        // Affichages des eleves
        foreach (reads_eleves($db) as $element) {
            echo '<tr><td>' . $element['id'] . '</td>' .
                '<td>' . $element['nom'] . '</td>' .
                '<td>' . $element['prenom'] . '</td>' .
                '<td>' . $element['genre'] . '</td>' .
                '<td>' . $element['email'] . '</td>' .
                '<td>' . $element['dateNaissance'] . '</td>' .
                '<td>' . $element['tel'] . '</td>' .
                '<td><a href="?del=' . $element['id'] . '" >X</a></td>' .
                '<td><a href="?edit=' . $element['id'] . '" >M</a></td></tr>';
        }
        ?>
    </table>
    <form method="post" action="">
        <input type="text" name="nom" placeholder="nom" value="<?php echo $nom_modif ?>" />
        <input type="text" name="prenom" placeholder="prenom" value="<?php echo $prenom_modif ?>" />
        <select name="genre">
            <?php
            echo formSelectOptions(['F' => 'Femme', 'H' => 'Homme', 'X' => 'Autre'], $genre_modif);
            ?>
        </select>
        <input type="email" name="email" placeholder="email" value="<?php echo $email_modif ?>" />
        <select name="day">
            <?php
            echo formSelectOptionsNumber(1, 31, $dateNaissance_modif[2]);
            ?>
        </select>
        <select name="month">
            <?php
            echo formSelectOptionsNumber(1, 12, $dateNaissance_modif[1]);
            ?>
        </select>
        <select name="year">
            <?php
            echo formSelectOptionsNumber(2019, 1900, $dateNaissance_modif[0]);
            ?>
        </select>
        <input type="tel" name="telephone" placeholder="telephone" value="<?php echo $tel_modif ?>" />
        <input type="submit" name="valider" value="valider" />
    </form>

</body>

</html>