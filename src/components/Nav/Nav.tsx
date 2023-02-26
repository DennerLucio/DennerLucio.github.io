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
                <li><a href="#s_ancora">Sobre Mim</a></li>
                <li><a href="#t_ancora">Tecnologias</a></li>
                <li><a href="#p_ancora">Portifólio</a></li>
                <li><a href="#c_ancora">Contato</a></li>
                </ul>
            </div>
            
            </div>
            

            
        </div>
    );
}