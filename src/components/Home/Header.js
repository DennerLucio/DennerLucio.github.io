import React from "react";
import "./Header.css";

const Header = () => {
  window.onload = function flip() {
    const card = document.querySelector("#card");
    const bugIdiota = document.getElementById("back")
    var b = false;
    card.addEventListener("click", (e) => {
      b = !b
      card.classList.toggle("flip");
if(b){
  bugIdiota.style.opacity = '1'
}else{
  bugIdiota.style.opacity = '0'
}


    });
  };

  return (
    <div>
      <div class="cabecalho">
        <div className="" id="barra">
          <div className="flip" id="card">
            <div className="face" id="front">
              <img
                class="foto"
                src="/img/pp.jpeg"
                alt="foto de perfil"
              />
            </div>
            <div className="face" id="back">
              <img class="foto" src="/img/logoDenner.jpeg" alt="logo" />
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
