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
        <div className="portifolio">
        <div id="tituloTec"><h1 id="TopicoContato"><a className="GradienteSubli" href="#t">Portifólio</a></h1></div>
         <Carousel breakPoints={breakPoints} className="gallery_carousel">
         <Card num="<In Development/>"/>
         <Card num="mari"/>
         <Card />
         <Card />
         <Card />
         <Card />
        </Carousel>
         </div>
      
    );
  };
  
  export default Portifolio;