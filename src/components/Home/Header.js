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
      bugIdiota.style.opacity = '1'
      bugIdiota.style.zIndex = '1'}
    else{
      bugIdiota.style.opacity = '0'
      bugIdiota.style.zIndex = '-1'}
    });


    card1.addEventListener("click", (e) => {
      b = !b
      card1.classList.toggle("flip");
    if(b){
      bugIdiota1.style.opacity = '1'
      bugIdiota1.style.zIndex = '1'}
    else{
      bugIdiota1.style.opacity = '0'
      bugIdiota1.style.zIndex = '-1'}
    });


    card2.addEventListener("click", (e) => {
      c = !c
      card2.classList.toggle("flip");
    if(c){
      bugIdiota2.style.opacity = '1'
      bugIdiota2.style.zIndex = '1'}
    else{
      bugIdiota2.style.opacity = '0'
      bugIdiota2.style.zIndex = '-1'}
    });


    card3.addEventListener("click", (e) => {
      d = !d
      card3.classList.toggle("flip");
    if(d){
      bugIdiota3.style.opacity = '1'
      bugIdiota3.style.zIndex = '1'}
    else{
      bugIdiota3.style.opacity = '1'
      bugIdiota3.style.zIndex = '-1'}
    });


  };

  return (
    <div>
      <div class="cabecalho">
        <div className="" id="barra">

          <div className="flip" id="card">
            <div className="face" id="front">
              <img className="icone" src="/icons/local.png" alt="icone_localização" />
            </div>
            <div className="face" id="back">
              <div className="paredebranca">
              <a href="https://www.google.com/maps/place/Sarzedo,+MG,+32450-000/@-20.0362601,-44.1438109,15z/data=!4m6!3m5!1s0xa6c700b65494e5:0xb944a24b331c7114!8m2!3d-20.0359196!4d-44.1456593!16s%2Fg%2F11bxfycp72" target="_blank" rel="noopener noreferrer">
                <img className="icone_back" src="/icons/localizacao.png" alt="icone_teste" />
                </a>
                <p className="p1">MG</p>
                <p>Sarzedo</p>
              </div>
            </div>
          </div>

          <div className="flip" id="card1">
            <div className="face" id="front">
              <img className="icone" src="/icons/watsblack.png" alt="icone_localização" />
            </div>
            <div className="face" id="back1">
              <div className="paredebranca" >
                
                <img className="icone_back" src="/icons/whatsapp.png" alt="icone_teste" />
              
                
                <p className="p1">(31)99803-6573</p>
              </div>
            </div>
          </div>

          <div className="flip" id="card2">
            <div className="face" id="front">
              <img className="icone" src="/icons/github.png" alt="icone_localização" />
            </div>
            <div className="face" id="back2">
              <div className="paredebranca" >
                <img className="icone_back" src="/icons/githubback.png" alt="icone_teste" />
                <a  className="p1" href="https://github.com/DennerLucio" target="_blank" rel="noopener noreferrer">Denner Lucio</a>
              </div>
            </div>
          </div>

          <div className="flip" id="card3">
            <div className="face" id="front">
              <img className="icone" src="/icons/email.png" alt="icone_localização" />
            </div>
            <div className="face" id="back3">
              <div className="paredebranca" >
                <img className="icone_back" src="/icons/gmail.png" alt="icone_teste" />
                <p  className="p1">denner.luciosl@gmail.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
