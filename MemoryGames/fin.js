container.addEventListener('click', () => {
    if (tableauResultList.length > 19) {
        finDeLaPartie();
    }
})

function finDeLaPartie() {
    // console.log('*** écris MA BITE ***');
    if (rec === false) {
        rec = true
        let nomDuJoueur = document.querySelector('.theName');
        timeEnd = moment();
        let timeGame = (timeEnd - timeStart) / 1000;
        let date = moment().format("DD-MM-YYYY");
        if (localStorage.getItem('tableauResult') === null) {
            let tab = [];
            let unObjet = {
                'id': 1,
                'nom': nomDuJoueur.innerText,
                'timeGame': timeGame,
                'date': date
            }
            tab.push(unObjet);
            unObjet = JSON.stringify(tab);
            localStorage.setItem('tableauResult', unObjet);
            return
        } else {
            let tab = JSON.parse(localStorage.getItem('tableauResult'));
            let newId = tab.length;
            let unObjet = {
                'id': newId + 1,
                'nom': nomDuJoueur.innerText,
                'timeGame': timeGame,
                'date': date
            }
            tab.push(unObjet);
            let inject = JSON.stringify(tab);
            localStorage.setItem('tableauResult', inject);
        }
    }
    tableauResultList = [];
    document.location.reload(true);
}