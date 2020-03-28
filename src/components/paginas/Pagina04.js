import React, { Component } from "react";
import {TimelineMax} from 'gsap';

import victimas from '../../img/ilustraciones/victimas.png';

class Pagina04 extends Component {
    constructor(props){
        super(props);
        this.victimas = null;
    }

    render() {
        return(
            <>
            <div className="slide pagina_04">
                <div
                    className="imgcontainer victimas"
                    ref={div => {this.victimas = div}}
                    style={{backgroundImage: `url(${victimas})`}}
                ></div>
            </div>
            </>
        );
    }
}

export default Pagina04;