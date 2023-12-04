export const createElement = (template, callbacks) => {
  return class Element extends HTMLElement {
    constructor() {
      super();
      if (template) {
        const clone = template.cloneNode(true);
        this.appendChild(clone);
      }
    }

    connectedCallback() {
      if (callbacks?.connected) callbacks.connected(this);
    }
  };
};
