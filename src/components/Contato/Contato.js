import React from "react";
import "./Contato.css";

const Contato = () => {

 

  return (
    <div>
      <div className="Contato">
        <div id="tituloContato"><h1 id="TopicoContato"><a className="GradienteSubli" href="#al">Contato</a></h1></div>
        <div className="txt_cont"> <p>dasdawdasdjlawkjelkdjalkwjdajwdlkjsdaljwdlajkdsajdlsjdasjdldsjdaljdakj</p>  </div>
        <div className="alinha" id="al">      
          <div className="paredebranca">
            <a href="https://www.google.com/maps/place/Sarzedo,+MG,+32450-000/@-20.0362601,-44.1438109,15z/data=!4m6!3m5!1s0xa6c700b65494e5:0xb944a24b331c7114!8m2!3d-20.0359196!4d-44.1456593!16s%2Fg%2F11bxfycp72" target="_blank" rel="noopener noreferrer">
              <img className="icone_cont" src="/icons/local.png" alt="icone_teste" />
            </a>
          </div>
          <div className="paredebranca">
            <a  className="p1" href="https://api.whatsapp.com/send?phone=31998036573&text=Oi,%20meu%20nome%20é%20Denner,%20será%20um%20prazer%20conversar%20com%20você%20:D." target="_blank" rel="noopener noreferrer">
               <img  className="icone_cont" src="/icons/watsblack.png" alt="icone_teste" />
            </a>  
          </div>
          <div className="paredebranca">
            <a  className="p1" href="https://github.com/DennerLucio" target="_blank" rel="noopener noreferrer">
              <img  className="icone_cont" src="/icons/github.png" alt="icone_teste" />
            </a>  
          </div>
          <div className="paredebranca">
           <a href="mailto:denner.luciosl@gmail.com">
             <img  className="icone_cont" src="/icons/email.png" alt="icone_email" />
           </a>
          </div>


        </div>
        </div>
    </div>
  );
};

export default Contato;
