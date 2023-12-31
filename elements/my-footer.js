import { html, createCustomElement } from "library";
import "./my-cube.js";

const footerTemplate = html`
  <footer>
    <p class="footer-text">
      Don't Panic. <span class="copy-mark">©</span> Connor Minielly 2023
    </p>
    <my-cube></my-cube>
  </footer>
`;

const Footer = createCustomElement(footerTemplate);

customElements.define("my-footer", Footer);
