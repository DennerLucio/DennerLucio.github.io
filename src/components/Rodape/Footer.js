import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="rodape">
          <div id="rod">
            <a href="https://github.com/DennerLucio" target="_blank" rel="noopener noreferrer">
              <img class="logos" src="/icons/github.png" alt="github" />
            </a>
            <a href="https://www.instagram.com/denner.lucio/?hl=pt-br" target="_blank" rel="noopener noreferrer">
              <img class="logos" src="/icons/instagram.png" alt="instagram" />
            </a>

            <a href="https://www.linkedin.com/in/denner-lucio-165919212/" target="_blank" rel="noopener noreferrer">
              <img class="logos" src="/icons/linkedin.png" alt="linkedin" />
            </a>
            
          </div>
          <span id="spanFinal">Para mais Informações sobre mim acesse minhas redes sociais acima.</span>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
