import './nav.css'
import React, { useState } from 'react';

export function Nav(){

    const [toggle, setToggle] = useState(true);
    const handleClick = () => {
       
        setToggle(current => !current);
      };
 


    return(
        <div>
            <div className='containerNav'>

            <div className='containerLogo'>
                <img className="foto" src="/img/logoDenner.png" alt="logo" />
                <h1 className='h1Name'>Denner Lucio</h1>
                </div>
            <div className='mobile-menu' onClick={handleClick}></div>
            <div>
                <ul className={toggle ? 'containerList' : 'containerList active'}>
                <li>Sobre Mim</li>
                <li>Portifólio</li>
                <li>Contato</li>
                </ul>
            </div>
            
            </div>
            

            
        </div>
    );
}