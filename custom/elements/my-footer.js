import { html } from "../utils/template-tag.js";
import "./my-cube.js";

const footerTemplate = html`
  <footer>
    <p class="footer-text">
      Don't Panic. <span class="copy-mark">©</span> Connor Minielly 2023
    </p>
    <my-cube></my-cube>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
    const footerClone = footerTemplate.cloneNode(true);
    this.appendChild(footerClone);
  }
}

customElements.define("my-footer", Footer);
