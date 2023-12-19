import { html, createCustomElement, createElement } from "library";

const articleDirectory = [
  {
    index: 0,
    title: "Animation Fundamentals For Programmers Like Me And You",
    icons: [
      {
        alt: "A Symbol Representing Animation",
        path: "../images/animation.svg",
      },
      { alt: "Person Running", path: "../images/running.svg" },
    ],
    description: "A talk I did at the Polyhack tech meetup in toronto in 2019.",
    link: "animation-fundamentals-talk.html",
  },
  {
    index: 1,
    title: "Finding The Fun: Building Websites With Web Components",
    icons: [
      { alt: "Crossed Tools", path: "../images/tools.svg" },
      { alt: "A Person Having Fun", path: "../images/play.svg" },
      { alt: "A Representation of a Website", path: "../images/webview.svg" },
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

const Articles = createCustomElement(null, {
  connected: (elem) => {
    if (!elem.hasChildNodes()) {
      const listFragment = new DocumentFragment();
      articleDirectory.reverse().forEach((article) => {
        const cardClone = cardTemplate.cloneNode(true);
        cardClone.querySelector(".card-title").innerHTML = article.title;
        cardClone.querySelector(".card-description").innerHTML =
          article.description;
        const iconsFragment = new DocumentFragment();
        iconsFragment.append(
          ...article.icons.map((icon) => {
            return createElement("img", {
              src: icon.path,
              alt: icon.alt,
              height: 50,
              width: 50,
              className: "card-icon",
              loading: "lazy",
            });
          })
        );
        cardClone.querySelector(".card-icons").appendChild(iconsFragment);
        cardClone.querySelector(".card-link").href = `./${article.link}`;
        listFragment.appendChild(cardClone);
      });
      elem.appendChild(listFragment);
    }
  },
});

customElements.define("my-articles", Articles);
