import React from "react";
import "./Header.css";

const Header = () => {
  window.onload = function flip() {
    const card = document.querySelector("#card");
    const card1 = document.querySelector("#card1");
    const card2 = document.querySelector("#card2");
    const card3 = document.querySelector("#card3");
    const bugIdiota = document.getElementById("back");
    const bugIdiota1 = document.getElementById("back1")
    const bugIdiota2 = document.getElementById("back2")
    const bugIdiota3 = document.getElementById("back3")
    var a = false;
    var b = false;
    var c = false;
    var d = false;

    card.addEventListener("click", (e) => {
      a = !a
      card.classList.toggle("flip");
    if(a){
      bugIdiota.style.opacity = '1'}
    else{
      bugIdiota.style.opacity = '0'}
    });


    card1.addEventListener("click", (e) => {
      b = !b
      card1.classList.toggle("flip");
    if(b){
      bugIdiota1.style.opacity = '1'}
    else{
      bugIdiota1.style.opacity = '0'}
    });


    card2.addEventListener("click", (e) => {
      c = !c
      card2.classList.toggle("flip");
    if(c){
      bugIdiota2.style.opacity = '1'}
    else{
      bugIdiota2.style.opacity = '0'}
    });


    card3.addEventListener("click", (e) => {
      d = !d
      card3.classList.toggle("flip");
    if(d){
      bugIdiota3.style.opacity = '1'}
    else{
      bugIdiota3.style.opacity = '0'}
    });


  };

  return (
    <div>
      <div class="cabecalho">
        <div className="" id="barra">

          <div className="flip" id="card">
            <div className="face" id="front">
              <img className="icone" src="/icons/localizacao.png" alt="icone_localização" />
            </div>
            <div className="face" id="back">
              <div className="paredebranca">
                <img className="icone_back" src="/icons/local_edit.png" alt="icone_teste" />
              <p>Sarzedo - MG</p>
              </div>
            </div>
          </div>

          <div className="flip" id="card1">
            <div className="face" id="front">
              <img className="icone" src="/icons/localizacao.png" alt="icone_localização" />
            </div>
            <div className="face" id="back1">
              <div className="paredebranca" >
                <img className="icone_back" src="/icons/local_edit.png" alt="icone_teste" />
                <p>Sarzedo - MG</p>
              </div>
            </div>
          </div>

          <div className="flip" id="card2">
            <div className="face" id="front">
              <img className="icone" src="/icons/localizacao.png" alt="icone_localização" />
            </div>
            <div className="face" id="back2">
              <div className="paredebranca" >
                <img className="icone_back" src="/icons/local_edit.png" alt="icone_teste" />
                <p>Sarzedo - MG</p>
              </div>
            </div>
          </div>

          <div className="flip" id="card3">
            <div className="face" id="front">
              <img className="icone" src="/icons/localizacao.png" alt="icone_localização" />
            </div>
            <div className="face" id="back3">
              <div className="paredebranca" >
                <img className="icone_back" src="/icons/local_edit.png" alt="icone_teste" />
                <p>Sarzedo - MG</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Header;
