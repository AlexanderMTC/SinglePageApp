import api from "../helpers/read_api.js";

export function Title() { 
  const $h1 = document.createElement("h1");
  $h1.innerHTML = `
  <p>
  Home: Slider y consumo desde la API - ${api.NAME.toUpperCase()}
  <br/>
  Contacto: Renderizado dinámico (One file component)
  </p>
  `;
  return $h1;
};