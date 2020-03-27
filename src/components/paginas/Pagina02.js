import React, { Component } from "react";
import {TimelineMax} from 'gsap';

import hola from '../../img/ilustraciones/hola.png';

class Pagina02 extends Component {
    constructor(props) {
        super(props);

        this.hola = null;
        this.tweenIntro =null;
    }

    componentDidMount(){
        this.tweenIntro = new TimelineMax();
        this.tweenIntro.add('start')
        .fromTo(this.hola, 0.5, {autoAlpha: 0, y: 20}, {autoAlpha: 1, y: 0}, '+=0.5')
        ;
    }

    render(){
        return (
            <>
                <div className="slide pagina_02">
                    <div 
                        className="hola imgcontainer"
                        ref={div => {this.hola = div}}
                        style={{backgroundImage: `url(${hola})`}}
                    ></div>
                </div>
            </>
        );
    }
}

export default Pagina02;