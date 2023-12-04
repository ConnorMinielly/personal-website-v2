import { html, createElement } from "library";

const headerTemplate = html`<header>
  <a id="header-home-link">
    <h1 class="title">Connor Minielly</h1>
  </a>
</header>`;

const Header = createElement(headerTemplate, {
  connected: (elem) => {
    const homeLink = elem.querySelector("#header-home-link");
    homeLink.href = elem.getAttribute("home-path");
  },
});

customElements.define("my-header", Header);
