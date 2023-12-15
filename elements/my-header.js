import { html, createCustomElement } from "library";

const headerTemplate = html`<header>
  <a href="/index.html">
    <h1 class="title">Connor Minielly</h1>
  </a>
</header>`;

const Header = createCustomElement(headerTemplate);

customElements.define("my-header", Header);
