import { html, createElement } from "library";

const articleDirectory = [
  {
    index: 0,
    title: "Animation Fundamentals For Programmers Like Me And You",
    icons: [
      { alt: "Tools", path: "../images/tools-icon.svg" },
      { alt: "Website", path: "../images/website-icon.svg" },
    ],
    description: "A talk I did at the Polyhack tech meetup in toronto in 2019.",
    link: "animation-fundamentals-talk.html",
  },
  {
    index: 1,
    title: "Finding The Fun: Building With Sites With Web Components",
    icons: [
      { alt: "Tools", path: "../images/tools-icon.svg" },
      { alt: "Website", path: "../images/website-icon.svg" },
    ],
    description:
      "Using pure web technologies to rediscover the fun of building websites without custom servers or frameworks.",
    link: "building-with-web-components.html",
  },
];

const cardTemplate = html`
  <section class="card">
    <a class="card-link">
      <div class="card-icons"></div>
      <h2 class="card-title">default title</h2>
      <p class="card-description">default description</p>
    </a>
  </section>
`;

const Articles = createElement(null, {
  connected: (elem) => {
    if (!elem.hasChildNodes()) {
      articleDirectory.reverse().forEach((article) => {
        const cardClone = cardTemplate.cloneNode(true);
        cardClone.querySelector(".card-title").innerHTML = article.title;
        cardClone.querySelector(".card-description").innerHTML =
          article.description;
        article.icons.forEach((icon) => {
          const iconImgTag = document.createElement("img");
          iconImgTag.src = icon.path;
          iconImgTag.alt = icon.alt;
          iconImgTag.height = 50;
          iconImgTag.width = 50;
          iconImgTag.className = "card-icon";
          iconImgTag.loading = "lazy";
          cardClone.querySelector(".card-icons").appendChild(iconImgTag);
        });
        cardClone.querySelector(".card-link").href = `./${article.link}`;
        elem.appendChild(cardClone);
      });
    }
  },
});

customElements.define("my-articles", Articles);
