import { Component } from "react";
import Trompo from "./Trompo";
import Bistec from "./Bistec";
import Barbacoa from "./Barbacoa";
import Chicharron from "./Chicharron";


class Maiz extends Component{
    render() {
        return(
            <div>
                <h1>Maiz</h1>
                <Trompo/>
                <Bistec/>
                <Barbacoa/>
                <Chicharron/>

            </div>
        )
    }
}

export default Maiz;