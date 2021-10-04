import {React,Component} from 'react';
import {NavLink} from 'react-router-dom'


class Header extends Component{
    render(){
        return(
            <div>
                <NavLink to='/'> Home </NavLink>
                <NavLink to='/menu'> Menu </NavLink>
                <NavLink to='/aboutUs'> About Us </NavLink>
                <NavLink to='/contact'> Contact </NavLink>
                <NavLink to='/events'> Events </NavLink>
            </div>
        )
    }
}

export default Header;