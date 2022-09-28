export function PostCard(props, index) {
  return `
          <section class="testimony__body ${
            index === 0 ? "testimony__body--show" : ""
          }" data-id="${index + 1}">
            <div class="testimony__texts">
              <h2>
                Random User, ${props.name.title} 
                ${props.name.first} 
                ${props.name.last}
              </h2>
              
              <h3>
               Ciudad: ${props.location.city} <br/> 
               Estado: ${props.location.state} <br/>
               Pais: ${props.location.country}
              </h3>
            </div>

            <figure class="testimony__picture">
              <img src="${props.picture.large}" class="testimony__img" />
            </figure>
          </section>
          `;
}
