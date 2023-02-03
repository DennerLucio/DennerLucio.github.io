import React from "react";
import "./Article.css";

const Article = () => {
  return (
    <div className="Tec">
      <div id="tituloTec"><h1 id="TopicoContato"><a className="GradienteSubli" href="#t">Tecnologias</a></h1></div>
      <div  className="carousel" >
        <ul id="t">
            <li> <img className="icone" src="/icons/html5_icon.png" alt="icone_HTML5" /><p>HTML5</p> </li>
            <li> <img className="icone" src="/icons/css3_icon.png" alt="icone_HTML5" /><p>CSS3</p>  </li>
            <li> <img className="icone" src="/icons/sass_icon.png" alt="icone_HTML5" /><p>SASS</p> </li>
            <li> <img className="icone" src="/icons/git_icon2.png" alt="icone_HTML5" /><p>Git</p>  </li>
            <li> <img className="icone" src="/icons/js_icon.png" alt="icone_HTML5" /><p>Javascript</p>  </li>
            <li> <img className="icone" src="/icons/node_icon.png" alt="icone_HTML5" /><p>Node</p>  </li>
        </ul>
        </div>
        <div  className="carousel">
         <ul>
            <li> <img className="icone" src="/icons/mysql_icon.png" alt="icone_HTML5" /><p>MySQL</p> </li>
            <li> <img className="icone" src="/icons/postgree_icon.png" alt="icone_HTML5" /><p>Postgree</p> </li>
            <li> <img className="icone" src="/icons/python_icon.png" alt="icone_HTML5" /><p>Python</p> </li>
            <li> <img className="icone" src="/icons/react_icon.png" alt="icone_HTML5" /><p>React</p> </li>          
            <li> <img className="icone" src="/icons/vuejs_icon.png" alt="icone_HTML5" /><p>Vue.js</p></li>
          </ul>
        </div>
    </div>
  );
};

export default Article;
