export function Menu() { 
  const $menu = document.createElement("nav");
  $menu.classList.add("menu");
  $menu.innerHTML = `
  <a href="#/">Home</a>
  <a href="#/contacto">Contacto</a>
  <a href="#/">Enlace 3</a>
  <a href="#/">Enlace 4</a>
  <a href="#/">Enlace 5</a>
  <a href="#/">Enlace 6</a>
  `;
  return $menu;
};