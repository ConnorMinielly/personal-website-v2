import { createElement } from "library";
const loadWhenIdle = window.requestIdleCallback || window.requestAnimationFrame;

const connectCustomElements = async () => {
  const allNodes = Object.values(
    document.querySelector("body").querySelectorAll("*")
  );
  const customNodes = allNodes.filter(
    ({ localName }) =>
      localName.includes("my-") && !customElements.get(localName)
  );

  const fragment = new DocumentFragment();
  fragment.append(
    ...customNodes.map(({ localName }) =>
      createElement("script", {
        type: "module",
        src: `/elements/${localName}.js`,
        async: true,
      })
    )
  );

  loadWhenIdle(() => {
    document.head.appendChild(fragment);
  });
};

connectCustomElements();
