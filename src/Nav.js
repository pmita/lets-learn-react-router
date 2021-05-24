import React from 'react';
/*
    We can also directly route our components based on links the user can click on
    A perfect example is navigation links accessing different components on our screen
    based on active links. For this we need to also introduce the Link module from 
    react-router-dom
*/
import {Link} from 'react-router-dom'; //Let import everything Router related

function Nav(){ 
    return(
        <nav>
            <h3>Logo</h3>
            <ul className='nav-links'>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
                
            </ul>
        </nav>
    )
}

export default Nav;