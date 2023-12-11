export const createElement = (type, attributes) => {
  const element = document.createElement(type);
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  return element;
};
