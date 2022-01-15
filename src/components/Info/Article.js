import React from "react";
import "./Article.css";

const Article = () => {
  return (
    <div className="artigo">
      <div className="divsArticle" id="divEsquerda">
        <h1>Formação Acadêmica</h1>
        <h3>Senai - Betim - MG</h3>
      
          <span>Curso: Desenvolvimento de Sistemas - Concluido (02/2021)</span>
          <span>Curso: Instalação e Reparação de Redes - Concluido (12/2019) </span>
        
        <h3>Estácio de Sá - Betim - MG</h3>
      
          <span>
            Graduação: Sistemas de Informação - Previsão de Conclusão (03/2025)
          </span>
        
        <h3>Certificados e Afins</h3>
        
          <span>Digital Innovation One: Lógica de Programação Essencial </span>
          <span>Digital Innovation One: Introduçao ao JavaScript</span>
          <span>Digital Innovation One: Bootcamp Inter Frontend Developer</span>
          <span>Digital Innovation One: Programação Web em Java Script</span>
          <span>Digital Innovation One: Introduçao ao React</span>
          <span>Digital Innovation One: Trabalhando com Componentes em React</span>
          <span>Fundação Bradesco: Introdução a Redes de Computadores</span>
          <span>Fundação Bradesco: Segurança em Tecnologia da Informação</span>
        
      </div>
      <div className="divsArticle" id="divDireita">
        <h1>Skills</h1>
        <h3>Hard Skills</h3>
        <h3>Soft Skills</h3>
      </div>
    </div>
  );
};

export default Article;
