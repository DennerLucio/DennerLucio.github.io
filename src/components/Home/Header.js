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
              FRONT
            </div>
            <div className="face" id="back">
            <span> https://www.instagram.com/denner.lucio/?hl=pt-br</span>
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
