import React from "react";
import "./Article.css";

const Article = () => {
  var c = true;
  function confereE() {
    c = !c;
    var divHis = document.getElementById("divHis");
    var tit = document.getElementById("fortitulo")
    if (c) {
      divHis.style.display = "none";
     tit.style.top= "50%"
    
    } else {
      divHis.style.display = "flex";
      tit.style.top= "10%"
    }
  }

  function confereD() {
    c = !c;
    var divSkill = document.getElementById("ski");
    if (c) {
      divSkill.style.display = "none";
    } else {
      divSkill.style.display = "flex";
    }
  }

  return (
    <div className="artigo">
      <div className="divsArticle" id="divEsquerda" onClick={confereE}>
        <h1 id="fortitulo">Formação Acadêmica</h1>

        <div className="divHistorico" id="divHis">
          <div className="his">
            <h3 className="titulosForm">Senai - Betim - MG</h3>
            <span>
              Curso: Desenvolvimento de Sistemas - Concluido (02/2021).{" "}
              <br></br>
              Curso: Instalação e Reparação de Redes - Concluido (12/2019).
            </span>
            <h3 className="titulosForm">Estácio de Sá - Betim - MG</h3>
            <span>
              Graduação: Sistemas de Informação - Previsão de Conclusão
              (03/2025).
            </span>
          </div>
          <div className="his">
            <h3>Certificados e Afins</h3>
            <span className="regulaSpan">
              Digital Innovation One: Lógica de Programação Essencial. <br></br>
              Digital Innovation One: Introduçao ao JavaScript.<br></br>
              Digital Innovation One: Bootcamp Inter Frontend Developer Digital.
              <br></br>
              Innovation One: Programação Web em Java Script. <br></br> Digital
              Innovation One: Introduçao ao React.<br></br>
              Digital Innovation One: Trabalhando com Componentes em React.
              <br></br>Fundação Bradesco: Introdução a Redes de Computadores.
              <br></br>Fundação Bradesco: Segurança em Tecnologia da Informação.
            </span>
            {/* <a href="">https://drivegoogle/pasta/certificados</a> */}
          </div>
        </div>
      </div>
      <div className="divsArticle" id="divDireita" onClick={confereD}>
        <h1>Skills</h1>
        <div className="divSkill" id="ski">
          <div className="skill">
            <div className="s" id="first">
              <h3> HTML </h3>
              <p>
                É uma linguagem de marcação utilizada na construção de páginas
                na Web, Ele permite a construção de websites e a inserção de
                novos conteúdos, por meio dos hipertextos.{" "}
              </p>
            </div>
            <div className="s">
              <h3> CSS </h3>
              <p>
                CSS é uma linguagem de estilo para ser utilizado especificamente
                para definir a formatação de um documento e suas características
                de apresentação.
              </p>
            </div>
            <div className="s">
              <h3> JavaScript </h3>
              <p>
                É uma linguagem de programação que permite implementar itens
                complexos em páginas web mostrando conteúdo que se atualiza em
                um intervalo de tempo.
              </p>
            </div>
            <div className="s">
              <h3> React.js</h3>
              <p>
                O React é uma biblioteca JavaScript de código aberto com foco em
                criar interfaces de usuário em páginas web baseado em utilização
                de componentes.
              </p>
            </div>

            <div className="s">
              <h3> Node.js</h3>
              <p>
                Node.js é um software multiplataforma, baseado no interpretador
                V8 do Google e que permite a execução de códigos JavaScript fora
                de um navegador web.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
