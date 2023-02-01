import React from 'react'
import './app.css'

import { Nav } from './components/Nav/Nav'
import Headers from './components/Home/Header'
import Article from './components/Info/Article'
const App = () => {
 

  return (
    <>    
          <Nav />
          <Article />    
          <Headers />
          
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
