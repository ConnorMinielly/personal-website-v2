import { html } from "../utils/template-tag.js";
import ArticlesRef from "../content/articles.js";

const cardTemplate = html`
  <section class="card">
    <a class="card-link">
      <div class="card-icons"></div>
      <h2 class="card-title">default title</h2>
      <p class="card-description">default description</p>
    </a>
  </section>
`;

class Articles extends HTMLElement {
  constructor() {
    super();
    ArticlesRef.forEach((article) => {
      const cardClone = cardTemplate.cloneNode(true);
      cardClone.querySelector(".card-title").innerHTML = article.title;
      cardClone.querySelector(".card-description").innerHTML =
        article.description;
      article.icons.forEach((icon) => {
        const iconImgTag = document.createElement("img");
        iconImgTag.src = icon.path;
        iconImgTag.alt = icon.alt;
        iconImgTag.className = "card-icon";
        iconImgTag.loading = "lazy";
        cardClone.querySelector(".card-icons").appendChild(iconImgTag);
      });
      cardClone.querySelector(".card-link").href = `./${article.link}`;
      this.appendChild(cardClone);
    });
  }
}

customElements.define("my-articles", Articles);
