import "./portifolio.css"
import Carousel from "react-elastic-carousel"
import Card from "./card"

const Portifolio = () => {
    const breakPoints = [
      {width: 500, itemsToShow: 1},
      {width: 768, itemsToShow: 2},
      {width: 1200, itemsToShow: 3},
      {width: 1500, itemsToShow: 4},
    ]

    return (
        <div className="portifolio" id="p_ancora">
        <div id="titulo_portifolio"><h1 id="topico_portifolio"><a className="GradienteSubli" href="#p_ancora">Portifólio</a></h1></div>
         <Carousel breakPoints={breakPoints} className="gallery_carousel">
         <Card num="<In Development/>"/>
         <Card num="<In Development/>"/>
         <Card num="<In Development/>"/>
         <Card num="<In Development/>"/>
         <Card num="<In Development/>"/>
        </Carousel>
         </div>
      
    );
  };
  
  export default Portifolio;