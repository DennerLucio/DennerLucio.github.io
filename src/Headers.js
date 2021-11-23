import React from 'react';
import './Header.css'

function Headers(props) {

 
  return (
    <div>

      <div class="cabecalho">
        <div class="" id="barra">

        
          <div class="flip" id="card">
              <div id="front" class="face">
                FRONT
              </div>
              <div id="back" class="face">
                BACK
              </div>
          </div>

          </div>
        

      </div>









     
   </div>
  );
  




}

window.onload =function abc(){
  const card = document.querySelector('#card')
  card.addEventListener("click", (e) => {
    card.classList.toggle("flip")
  } )
 }



export default Headers;