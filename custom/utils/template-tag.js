// this html tag export will allow prettier to pick up and format html strings :)
export const html = (stringsInput) => {
  const template = document.createElement("template");
  template.innerHTML = stringsInput;
  return template.content;
};
