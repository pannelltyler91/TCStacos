import { Component } from "react";
import { NavLink } from "react-router-dom";

class Tacos extends Component {
  render() {
    return (
      <div>
        <h1>Tacos</h1>
        <NavLink to='/maiz'> Maiz </NavLink>
        <NavLink to='/harina'> Harina </NavLink>

      </div>
    );
  }
}

export default Tacos;