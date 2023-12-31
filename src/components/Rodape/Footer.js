import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="rodape" id="c_ancora">
      <div className="footer">
        <div className="container_lista">
          <ul id="first_ul">
            <li><a href="https://www.instagram.com/denner.lucio/" target="_blank" rel="noopener noreferrer"><img src="/icons/instagram.png" alt="icone_instagram"></img></a> </li>
            <li><a href="https://www.linkedin.com/in/denner-lucio-165919212/" target="_blank" rel="noopener noreferrer"> <img src="/icons/linkedin.png" alt="icone_instagram"></img></a></li>
            <li><a href="https://api.whatsapp.com/send?phone=31998036573&text=Oi,%20meu%20nome%20é%20Denner,%20será%20um%20prazer%20conversar%20com%20você%20:D." target="_blank" rel="noopener noreferrer"> <img src="/icons/wats_quadrado.png" alt="icone_instagram"></img></a></li>
            <li><a href="https://github.com/DennerLucio" target="_blank" rel="noopener noreferrer"> <img src="/icons/gittop.png" alt="icone_instagram"></img></a></li>
          </ul>
        </div>
        <div className="container_lista">
          <ul>
            <li>Obrigado por visitar, este projeto foi construido com muito carinho ❤ e React 😁.</li>            
          </ul>
        </div>
        <div className="container_lista">
          <ul>
            <li>© 2023 Todos os direitos reservados </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
