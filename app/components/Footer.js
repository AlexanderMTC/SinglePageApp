export function Footer() {
  const $footer = document.createElement("footer");
  
  const $styles = document.getElementById("dynamic-styles-footer");
  
  $styles.innerHTML = `

    .footer-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #51a6f5;
      box-shadow: 0 -4px 15px blue;
      padding: 0.5rem;
      bottom:0 ;
      width: 100%;
    }

    .footer-social {
      display: flex;
      gap: 1rem;
      border-bottom: medium solid #fff;
    }

    .footer-copyright {
      color: #fff;
      padding-bottom: 0.5rem;
    }
  `;

  $footer.innerHTML = `
       <section class="footer-container">
        <div class="footer-social">
          <a href="#"><img src="./app/assets/facebook.svg"/></a>
          <a href="#"><img src="./app/assets/twitter.svg"/></a>
          <a href="#"><img src="./app/assets/instagram.svg"/></a>
          <a href="#"><img src="./app/assets/icons8-linkedin.svg"/></a>
          <a href="#"><img src="./app/assets/icons8-github.svg"/></a>
        </div>
        <h3 class="footer-copyright">
          Copyright &copy; 2022
          Alexander Troncoso
        </h3>
      </section>
  `;


  return $footer;
}
