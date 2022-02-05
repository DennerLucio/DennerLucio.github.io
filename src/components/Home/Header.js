import React from "react";
import "./Header.css";

const Header = () => {
  window.onload = function flip() {
    const card = document.querySelector("#card");
    card.addEventListener("click", (e) => {
      card.classList.toggle("flip");
    });
  };

  return (
    <div>
      <div class="cabecalho">
        <div className="" id="barra">
          <div className="flip" id="card">
            <div className="face" id="front">
              <img class="foto" src="/img/pp.jpeg" alt="foto de perfil" />
            </div>
            <div className="face" id="back">
              <img class="foto" src="/img/logoDenner.jpeg" alt="foto de perfil" />
              {/* <span id="intro">Olá você clicou na minha foto e acabou descobrindo um pouco mais sobre mim:<br></br> 
            Prazer Meu nome é Denner,<br></br> eu sou um cara Cristão, curto games (Principalmente FPS e RPGs),
            <br></br> bem humorado e bem caseiro.<br></br><br></br> Seja bem vindo a minha página!!!</span>*/}
            </div>
          </div>
          <div id="cartaovisita">
            <h1>Denner Lucio Silva Lopes</h1>
            <h3>Desenvolvedor Júnior</h3>

            <h4 id="telefone">Tel: (31) 99803-6573</h4>
            <h4>Email: denner.luciosl@gmail.com</h4>
            <h4>https://github.com/DennerLucio</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
