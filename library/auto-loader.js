import { createElement } from "library";
const loadWhenIdle = window.requestIdleCallback || window.requestAnimationFrame;

const connectCustomElements = async () => {
  const nodes = Object.values(
    document.querySelector("body").querySelectorAll("*")
  );
  const customNodes = nodes.filter(
    ({ localName }) =>
      localName.includes("my-") && !customElements.get(localName)
  );
  customNodes.forEach((element) => {
    loadWhenIdle(() => {
      loadCustomElement(element);
    });
  });
};

const loadCustomElement = (element) => {
  const { localName } = element;
  const customElementScript = createElement("script", {
    type: "module",
    src: `/elements/${localName}.js`,
  });
  document.head.appendChild(customElementScript);
};

connectCustomElements();
