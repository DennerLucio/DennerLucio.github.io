import React from 'react'
import './app.css'

import { Nav } from './components/Nav/Nav'
import Headers from './components/Home/Header'
import Footer from './components/Rodape/Footer'
const App = () => {
 

  return (
    <>    
          <Nav />    
          <Headers />
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
