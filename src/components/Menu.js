import { Component } from "react";

import { NavLink } from "react-router-dom";


class Menu extends Component{
    render() {
        return(
            <div>
                <h1>Menu</h1>
                
                <NavLink to='/tacos'> Tacos </NavLink>
                <NavLink to='/quesadillas'> Quesadillas </NavLink>
                <NavLink to='/hamburguesas'> Hamburguesas </NavLink>
                <NavLink to='/papas'> Papas </NavLink>
                <NavLink to='/frijoles'> Frijoles </NavLink>
                <NavLink to='/bebidas'> Bebidas </NavLink>
                <NavLink to='/otras'> Otras </NavLink>
            </div>
        )
        
    }
}

export default Menu;