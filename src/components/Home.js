import { Component } from "react";

class Home extends Component {
    constructor() {
        super()
        this.state={
            message: 'food'
        }

    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default Home;

