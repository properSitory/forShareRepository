<?php
function debug($var){
    echo '<pre>';
    var_dump($var);
    echo '</pre>';
}

// Fonction qui prend en paramétre
// une borne de debut et de fin puis retourne un menu deroulant
// si la borne de fin est inférieur
// a la borne de debut ça fait l'affichage a l'envers
function formSelect ($debut,$fin, $defaultValue){
    $html='';
    if ($debut < $fin){
        for ($i=$debut;$i<=$fin; $i++){
            if ($defaultValue==$i){
                $html.=  "<option value = '$i' selected>$i</option>";
            }else {
                $html.=  "<option value = '$i' > $i</option>";
            }

        }
    }
    else {
        for ($i = $debut; $i >= $fin; $i--) {
            if ($defaultValue == $i) {
                $html .= "<option value = '$i' selected>$i</option>";
            } else {
                $html .= "<option value = '$i' > $i</option>";
            }
        }
    }
    return $html;
}

function formSelectOptions($data,$seletedValue=null){

    $html = '';
    foreach ($data as $key => $Value){
        if($key == $seletedValue){
            $html .= "<option value='$key' selected> $Value</option>";
        }else{
            $html .= "<option value='$key' > $Value</option>";
        }
    }

   return $html;

}

function formSelectOptionsNumber($debut,$fin,$seletedValue=null){

    $values = [];

    if($debut<$fin){
        for ($i=$debut;$i<=$fin;$i++){
            $values[$i]=$i;
        }
    }else{
        for($i=$debut;$i>=$fin;$i--){
            $values[$i]=$i;
        }
    }


    return formSelectOptions($values,$seletedValue);
}

//$option pour gérer la creation des options :
// true : tableau envoyé correspond à $tab[value] => valeur
// false: tableau envoyé =>  $tab[0] = $debut et $tab[1] = $fin

function formSelectOptionsDja($option, $tab,$selected=null){
    $html='';

    if($option){
        foreach($tab as $value => $text){

            if ($selected==$value){
                $html.=  "<option value = '$value' selected>$text</option>";
            }else {
                $html.=  "<option value = '$value' > $text</option>";
            }
        }
    }
    else{
        if(count($tab) == 2){
            $debut = $tab[0];
            $fin = $tab[1];
            $html = formSelect ($debut,$fin, $selected);
        }
    }
    return $html;
}