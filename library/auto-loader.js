const loadWhenIdle = window.requestIdleCallback || window.requestAnimationFrame;

export class AutoLoader extends HTMLElement {
  get elementsDirectory() {
    return this.hasAttribute("elements-directory")
      ? this.getAttribute("elements-directory")
      : "elements";
  }

  set elementsDirectory(value) {
    value && typeof value === "string"
      ? this.setAttribute("elements-directory", value)
      : this.removeAttribute("elements-directory");
  }

  get stylesDirectory() {
    return this.hasAttribute("styles-directory")
      ? this.getAttribute("styles-directory")
      : "styles";
  }

  set stylesDirectory(value) {
    value && typeof value === "string"
      ? this.setAttribute("styles-directory", value)
      : this.removeAttribute("styles-directory");
  }

  async connectedCallback() {
    const nodes = Object.values(this.parentNode.querySelectorAll("*"));
    const customNodes = nodes.filter(
      ({ localName }) =>
        localName.includes("my-") && !customElements.get(localName)
    );
    customNodes.forEach((element) => {
      loadWhenIdle(() => {
        this.loadCustomElement(element);
      });
    });
  }

  loadCustomElement(element) {
    const { localName } = element;
    const customElementScript = document.createElement("script");
    customElementScript.type = "module";
    customElementScript.src = `${this.elementsDirectory}/${localName}.js`;
    document.head.appendChild(customElementScript);
    if (!this.hasAttribute("no-external-css")) this.loadCss(element);
  }

  loadCss({ localName }) {
    const cssPreloadLink = document.createElement("link");
    cssPreloadLink.rel = "preload";
    cssPreloadLink.as = "style";
    cssPreloadLink.href = `${this.stylesDirectory}/${localName}.css`;
    document.head.appendChild(cssPreloadLink);

    const cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = `${this.stylesDirectory}/${localName}.css`;
    document.head.appendChild(cssLink);
  }
}

customElements.define("auto-loader", AutoLoader);
