import "./Sobremim.css";

const Sobremim = () => {
  return (
    <div className="sobremim">
      <div id="tituloContato"><h1 id="TopicoContato"><a className="GradienteSubli" href="#al">Sobre</a></h1></div>
      <div className="sobre_mim">
          <div className="txt"> 
          <p id="boas_vindas">Seja bem vindo a minha pagina!</p>
          <p className="mar">Cursando Sistemas de Informação (Estácio).</p>        
          <p className="mar">Técnico em Desenvolvimento de Sistemas.</p>      
          <p>Atualmente atuo na área de desenvolvimento de testes automatizados para sistemas ERP na empresa NASAJON, também desenvolvo projetos (pessoais) front-end e back-end, 
            experiência com metodologias ágeis (Scrum e Kanban), clean code.</p> </div>
          
      </div>
    </div>
  );
};

export default Sobremim;