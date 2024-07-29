// create the object that holds the information about the reviewer
const reviews = [
  {
    id: 0,
    picture: "sillyBobaGuy.png",
    name: "Bradley Bobathrous",
    jobTitle: "Boba Barista",
    description:
      "Bradley is the best boba barista in the business. Phasellus ut ante blandit, tempor nunc luctus, vulputate est. Curabitur molestie, quam at sagittis egestas, ligula diam ornare enim, vehicula elementum urna.",
  },
  {
    id: 1,
    picture: "beckyBoba.png",
    name: "Becky Bobbington",
    jobTitle: "Boba Boffin",
    description:
      "Becky is the brains behind our boba's bold flavor. Phasellus ut ante blandit, tempor nunc luctus, vulputate est. Curabitur molestie, quam at sagittis egestas, ligula diam ornare enim, vehicula elementum urna.",
  },
  {
    id: 2,
    picture: "bronsonBobaBringer.png",
    name: "Bronson Bringkert",
    jobTitle: "Boba Bringer",
    description:
      "Bronson always delivers your boba in a brisk fashion! Phasellus ut ante blandit, tempor nunc luctus, vulputate est. Curabitur molestie, quam at sagittis egestas, ligula diam ornare enim, vehicula elementum urna.",
  },
  {
    id: 3,
    picture: "bennyBadBoss.png",
    name: "Benny Bossworth",
    jobTitle: "Big Bad Boss",
    description:
      "Benny is a bit of a bum but someone has to be the boss. Phasellus ut ante blandit, tempor nunc luctus. Curabitur molestie, quam at sagittis egestas, ligula diam ornare enim, vehicula elementum urna.",
  },
];

// get access to elements on document
const card = document.getElementById("card");
const picture = document.getElementById("pic");
const name = document.getElementById("name");
const jobTitle = document.getElementById("jobTitle");
const description = document.getElementById("text");
const backBtn = document.getElementById("back");
const forwardBtn = document.getElementById("forward");
const randomBtn = document.getElementById("randomButton");

// functions
// 1 check which card we are one
// if someone presses the forawrd card, go to the next card, if the back button go to the previous card based on the array
// if they press forward and the we are on the last of the array, go to the first
// if they press back and wen are on the last element of array, go to the last element

//1 check which card we are on
const checkCard = () => {
  return card.className;
};

//2 check which button pressed

const changeCard = (id) => {
  card.className = id;
  picture.src = reviews[id].picture;
  name.innerText = reviews[id].name;
  jobTitle.innerText = reviews[id].jobTitle;
  description.innerText = reviews[id].description;
};

let length = reviews.length - 1;
const backBtnHandler = () => {
  let length = reviews.length - 1;
  let id = checkCard();
  if (id == 0) {
    id = length;
  } else {
    id--;
  }
  changeCard(id);
};

const forwardBtnHandler = () => {
  let length = reviews.length - 1;
  let id = checkCard();
  if (id == length) {
    id = 0;
  } else {
    id++;
  }
  changeCard(id);
};

const randomButtonHandler = () => {
  // don't let it be this id

  let length = reviews.length;
  let id = Math.floor(Math.random() * length);
  changeCard(id);
};

forwardBtn.addEventListener("click", forwardBtnHandler);
backBtn.addEventListener("click", backBtnHandler);
randomBtn.addEventListener("click", randomButtonHandler);
