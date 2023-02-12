import React from 'react'
import './app.css'
import Sobremim from './components/Sobremim/Sobremim'
import Footer from './components/Rodape/Footer'
import { Nav } from './components/Nav/Nav'
import Portifolio from './components/Portifolio/portifolio.js'
import Contato from './components/Contato/Contato'
import Tecnologia from './components/Tecnologia/Tecnologia'

const App = () => {
 

  return (
    <>    
          <Nav />
          <Contato />
          <Sobremim />
          <Tecnologia />
          <Portifolio />    
          
          <Footer />
   </>
  );
}




 
// class App extends React.Component{
//   render(){
//    return (
//         <div >
//           <Headers />
//           <Article />
//           <Footer />
//            </div>
//         );}
// }


export default App;
