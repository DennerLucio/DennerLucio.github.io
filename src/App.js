import React from 'react'
import './app.css'

import Article from './components/Info/Article'
import Headers from './components/Home/Header'
const App = () => {
  return (
    <>
          <Headers />
          <Article />
        
  
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
