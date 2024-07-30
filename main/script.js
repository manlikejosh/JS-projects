const projects = [
  {
    id: "card",
    path: "../JS card selector",
    description:
      "Simple card selector that changes information using Javascript",
  },
  {
    id: "faq",
    path: "../JS faq page",
    description: "FAQ page that uses Javascript to show more information",
  },
  {
    id: "menu",
    path: "../JS menu page",
    description: "Menu page that uses Javascript to filter through selections",
  },
  {
    id: "modal",
    path: "../JS modal",
    description: "Uses Javascript to display modal",
  },
  {
    id: "nav",
    path: "../JS nav bar",
    description: "Responsive navbar using *you guessed it* ¡Javascript! ",
  },
];

const anchor = document.getElementById("anchor");

function createCard(id, path, description) {
  const template = document.createElement("template");
  template.innerHTML = `
    <li class="card">
      <figure class="imageWrapper">
        <img src="images/${id}.png" alt="" />
      </figure>
      <article>
        <p>
          ${description}
        </p>
        <button onclick="window.location.href='${path}/index.html'">Check it out!</button>
      </article>
    </li>`;

  const card = template.content.firstElementChild;

  return card;
}

projects.forEach((item) => {
  const newCard = createCard(item.id, item.path, item.description);

  anchor.appendChild(newCard);
});
