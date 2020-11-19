let isLock = false; // sniffer carte bloquée ou pas
let isFlip = false; // sniffer de face de carte
let tryNumber = 0;
let tableauResultList = []; // stockage de la liste des paires valides
let clickToggle = 0; // lui sert à écouter si c'est la première ou deuxième carte (il fait juste 0 => 1 et 1 => 0)
let tableauResultNow = []; // stockage de carte temporaire le temps de la comparaison

function setPlate() {
    let theTableau = document.querySelectorAll('.carte')
    theTableau = [].slice.call(theTableau)
    let tableauSrc = ['images/image0.jpeg', 'images/image1.jpeg', 'images/image2.jpeg', 'images/image3.jpeg', 'images/image4.jpeg', 'images/image5.jpeg', 'images/image6.jpeg', 'images/image7.jpeg', 'images/image8.jpeg', 'images/image9.jpeg', 'images/image0.jpeg', 'images/image1.jpeg', 'images/image2.jpeg', 'images/image3.jpeg', 'images/image4.jpeg', 'images/image5.jpeg', 'images/image6.jpeg', 'images/image7.jpeg', 'images/image8.jpeg', 'images/image9.jpeg']
    tableauSrcMelange = shuffle(tableauSrc)
    theTableau.forEach(element => {
        let value = theTableau.indexOf(element)
        element.setAttribute('src', tableauSrcMelange[value])
        element.addEventListener('click', () => {
            if (element.getAttribute('src') !== 'images/greta.jpeg') {
                let sourceBase = element.getAttribute('src')
                element.setAttribute('alt', sourceBase)
                element.setAttribute('src', 'images/greta.jpeg')
                element.setAttribute('isFlip', false)
            } else {
                let sourceBase = element.getAttribute('src')
                let sourceAAfficher = element.getAttribute('alt')
                element.setAttribute('alt', sourceBase)
                element.setAttribute('src', sourceAAfficher)
                element.setAttribute('isFlip', true)
            }
        })
    })
}

function initGame() {
    setPlate();
    let theTableau = document.querySelectorAll('.carte');
    theTableau.forEach(element => {
        const image = element.getAttribute("src");
        element.setAttribute('alt', image);
        element.setAttribute('src', 'images/greta.jpeg');
        element.setAttribute('isFlip', isFlip)
        element.setAttribute('isLock', isLock)
    })
}

function resetCards(tableau) {
    setTimeout(() => {
        const firstSrc = tableau[0].getAttribute('src');
        const secondSrc = tableau[1].getAttribute('src');
        const blanked = tableau[0].getAttribute('alt');
        tableau[0].setAttribute('alt', firstSrc);
        tableau[0].setAttribute('src', blanked);
        tableau[1].setAttribute('alt', secondSrc);
        tableau[1].setAttribute('src', blanked);
    }, 1000);
}

function compareCards(tableau) {
    tryNumber += 1
    console.log(tryNumber)
    if (tableau[0].src === tableau[1].src) {
        console.log('youpi c\'est les même cartes');
        console.log('TODO : BLOQUER LES CARTES remove listener')
    } else {
        resetCards(tableau)
    }
    tableau = [];
}

initGame();

document.addEventListener("click", function (e) {
    if (clickToggle === 0) {
        clickToggle += 1
        let firstCard = e.target;
        tableauResultNow.push(firstCard)
        return tableauResultNow;
    } else {
        clickToggle = 0;
        tableauResultNow.push(e.target)
        compareCards(tableauResultNow)
        tableauResultNow = [];
    }
});