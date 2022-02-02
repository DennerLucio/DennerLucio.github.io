import React from "react";
import "./Footer.css";



const Footer = () => {
  return (
    <div>
      <div className="footer">
          <div className="rodape">
          <a href="https://github.com/DennerLucio">
          <img class="logos" src='/icons/github.png' alt="github" />
            </a>
            <a href="https://www.instagram.com/denner.lucio/?hl=pt-br">
          <img class="logos" src='/icons/instagram.png' alt="instagram"/>
          </a>
          <a href="https://web.whatsapp.com/">
          <img  class="logos" src='/icons/whatsapp.png' alt="whatsapp" />
          </a>
          <a href="https://www.linkedin.com/in/denner-lucio-165919212/">
          <img class="logos" src='/icons/linkedin.png' alt="linkedin" />
          </a>
          </div>
      </div>
    </div>
  );
};

export default Footer;
