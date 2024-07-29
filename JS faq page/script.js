const card = document.querySelectorAll('.card');
const cardInfo = document.querySelectorAll('.cardInfo');
const openCloseBtn = document.querySelectorAll('.cardIcon');

// for each element of the openCloseBtn node list (array thingie) add a function that adds the evenet listner
openCloseBtn.forEach(btn => {
    btn.addEventListener('click', () => {        
        // get access to this card info
        let thisCard = btn.parentElement;
        let thisInfo = thisCard.nextElementSibling;
        

        // remove any existing visible class from all cards unless it is this card
        for(let card of cardInfo) {
            if(card !== thisInfo){
                card.classList.remove('visible');
            }
            
        };

        // toggle the visible class on only the card that was clicked
        thisInfo.classList.toggle('visible');
        

    });
});

