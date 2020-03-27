import React, { Component } from "react";
import {TimelineMax} from 'gsap';

import bloque from '../../img/ilustraciones/bloque.png';
import como from '../../img/ilustraciones/como.png';

class Pagina03 extends Component {
    constructor(props) {
        super(props);

        this.bloque = null;
        this.como = null;
        this.tweenIntro = null;
    }

    componentDidMount() {
        this.tweenIntro = new TimelineMax();
        this.tweenIntro.add('start')
        .fromTo(this.bloque, 0.5, {autoAlpha: 0, y: 20}, {autoAlpha: 1}, '+=0.5')
        .fromTo(this.como, 0.5, {autoAlpha: 0, y: 20}, {autoAlpha: 1})
        ;
    }

    render() {
        return(
            <>
                <div className="slide pagina_03">
                    <div className="container">
                        <div
                            className="imgcontainer como"
                            ref={div => {this.como = div}}
                            style={{backgroundImage: `url(${como})`}}
                        ></div>
                        <div
                            className="imgcontainer bloque"
                            ref={div => {this.bloque = div}}
                            style={{backgroundImage: `url(${bloque})`}}
                        ></div>
                    </div>
                </div>
            </>
        );
        
    }
}

export default Pagina03;