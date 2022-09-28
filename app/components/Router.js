import { ajax } from "../helpers/ajax.js";
import api from "../helpers/read_api.js";
import { Slider } from "../helpers/slider.js";
import { ContactForm } from "./ContactForm.js";
import { PostCard } from "./PostCard.js";

export async function Router() {
  const d = document,
    w = window,
    $main = d.getElementById("main");

  let { hash } = location;

  $main.innerHTML = null;

  if (!hash || hash === "#/") {
    await ajax({
      url: api.POST,
      cbSuccess: (posts) => {
        let html = "";
        html = `
        <section class="testimony" id="testimony">
          <div class="testimony__container container">
            <img
              src="./app/assets/leftarrow.svg"
              class="testimony__arrow"
              id="before"
            />
        `;
        let pepe = Object.values(posts);
        pepe[0].forEach((post, index) => (html += PostCard(post, index)));

        html += `
          <img
              src="./app/assets/rightarrow.svg"
              class="testimony__arrow"
              id="next"
            />
          </div>
        </section>
        `;
        $main.innerHTML = html;
        Slider();
      },
    });
  } else if (hash === "#/contacto") {
    $main.appendChild(ContactForm());
  }

  d.querySelector(".loader").style.display = "none";
}