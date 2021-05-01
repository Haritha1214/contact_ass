import React from 'react';
import Home from './Components/Home'



const NavBar = () => {
    return (
        
        <div>
            <nav className="navbar navvbar-expand-lg navbar-light bg-dark py-2"><h1 style={{color:'white'}}>Contact Manager</h1></nav>
            <Home/>
        </div>
           
           
        
    );
};

export default NavBar;