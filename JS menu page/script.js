// GLOBAL CONSTANTS 
const ALL = 'all';
const TOP = 'top';
const BTM = 'bottoms';
const KICKS = 'kicks';

// ITEMS
const items = [
    {
        id: 1,
        img: 'supercooljacket.png',
        title: 'Coolest Jacket',
        price: '$4.99',
        text: 'This is the coolest jacket you can buy. If you want to look like a cool cat buy this (flames).',
        category: 'top'
    }, 
    {
        id: 2,
        img: 'starpants.png',
        title: 'STAR PANTS',
        price: '$57.89',
        text: 'Pretty cool pants. Yeah they have stars on the knees. Yeah they are flared',
        category: 'bottom'
    }, 
    {
        id: 3,
        img: 'catshoes.png',
        title: 'Cat Shoes',
        price: '$69.69',
        text: 'Cat shoes! What elese do you need to hear?! They are shoes with a CAT on it! :3',
        category: 'kicks'
    }, 
    {
        id: 4,
        img: 'punktee.png',
        title: 'punk rock t-shirt',
        price: '$0.99',
        text: 'Punk rock t-shirt. Comes smelling like sweat and weed.',
        category: 'top'
        
    }, 

];

// GET BUTTONS
const btns = document.querySelectorAll('.btns');
const all = document.getElementById('all');
const tops = document.getElementById('top');
const bottom = document.getElementById('bottom');
const kicks = document.getElementById('kicks');

// GET CARD INFO
const cardDisplay = document.getElementById('cards');
const card = cardDisplay.getElementsByClassName('card');
const img = document.querySelector('.itemPic');
const title = document.querySelector('.itemTitle');
const price = document.querySelector('.itemPrice');
const text = document.querySelector('.itemText');

// FUNCTIONS 

// loads the items
const loadItems = (displayItems) => {
    let display = displayItems.map((item) => {
        return `<article class="card">
        <section class="image">
          <img class="itemPic" src="${item.img}">
        </section>

        <div class="itemInfo">
          <header class="itemHead">
            <h4 class="itemName">${item.title}</h4>
            <h4 class="itemPrice"${item.price}></h4>
          </header>
          <hr>
          <p class="itemText">${item.text}</p>
        </div>
      </article>`;
    });
    display = display.join("");

    cardDisplay.innerHTML = display;
}

// loads items based on buttons 
const filteredItems = (displayItems, category) => {
  let displayTops = displayItems.filter((item) => {
    if (item.category === category) {
      return item;
    }
});
loadItems(displayTops);
}

// event listeners for buttons 
btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    let thisBtnCategory = btn.id; // this will conencide with the filter 
    if (thisBtnCategory === 'all') {
      loadItems(items);
    } else {
      filteredItems(items, thisBtnCategory);

    }
    
  });

});

window.addEventListener('DOMContentLoaded', (event) => {
  loadItems(items);
});