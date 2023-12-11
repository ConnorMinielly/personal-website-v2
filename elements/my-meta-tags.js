import { createCustomElement, createElement } from "library";

const MetaTags = createCustomElement(null, {
  connected: (elem) => {
    if (elem.hasAttribute("description")) {
      const descTag = createElement("meta", {
        name: "description",
        content: elem.getAttribute("description"),
      });
      document.head.appendChild(descTag);
    }
    if (elem.hasAttribute("author")) {
      const authorTag = createElement("meta", {
        name: "author",
        content: elem.getAttribute("author"),
      });
      document.head.appendChild(authorTag);
    }

    if ([...elem.attributes].some((att) => new RegExp("og-").test(att.name))) {
      const ogImageTag = createElement("meta", {
        property: "og:image",
        content: document.location.origin + elem.getAttribute("og-image"),
      });
      document.head.appendChild(ogImageTag);

      const ogDescTag = createElement("meta", {
        property: "og:description",
        content: elem.getAttribute("description"),
      });
      document.head.appendChild(ogDescTag);

      const ogTitleTag = createElement("meta", {
        property: "og:title",
        content: document.title,
      });
      document.head.appendChild(ogTitleTag);

      const ogUrlTag = createElement("meta", {
        property: "og:url",
        content: document.location,
      });
      document.head.appendChild(ogUrlTag);

      const ogTypeTag = createElement("meta", {
        property: "og:type",
        content: elem.getAttribute("og-type") || "article",
      });
      document.head.appendChild(ogTypeTag);
    }
  },
});

customElements.define("my-meta-tags", MetaTags);
