import React, { Component } from "react";
import {TimelineMax} from 'gsap';

import titulo from '../../img/ilustraciones/titulo.png';
import buscamos from '../../img/ilustraciones/buscamos.png';
import logo from '../../img/ilustraciones/logo.png';
import hash from '../../img/ilustraciones/hash.png';

class Pagina01 extends Component {
    constructor(props) {
        super(props);

        this.tweenIntro = null;

        this.titulo_elem = null;
        this.subtitulo_elem = null;
        this.btm = null;
    }

    componentDidMount() {
        this.tweenIntro = new TimelineMax();
        this.tweenIntro.add('start')
        .fromTo(this.titulo_elem, 1, {autoAlpha: 0}, {autoAlpha: 1}, '+=1')
        .fromTo(this.subtitulo_elem, 0.25, {autoAlpha: 0}, {autoAlpha: 1})
        .fromTo(this.btm, 0.25, {autoAlpha: 0}, {autoAlpha: 1})
        ;
    }

    render() {
        return(
            <>
                <div className="slide pagina_01">
                    <div
                        className="titulo imgcontainer"
                        ref={div => this.titulo_elem = div}
                        style={{backgroundImage: `url(${titulo})`}}    
                    ></div>
                    <div
                        className="subtitulo imgcontainer"
                        ref={div => this.subtitulo_elem = div}
                        style={{backgroundImage: `url(${buscamos})`}}
                    ></div>

                    <div
                        className="btm"
                        ref={div => this.btm = div}
                    >
                        <div
                            className="logo imgcontainer"
                            style={{backgroundImage: `url(${logo})`}}
                        ></div>
                        <div
                            className="hash imgcontainer"
                            style={{backgroundImage: `url(${hash})`}}
                        ></div>
                    </div>
                    
                </div>
            </>
        );
    }
}

export default Pagina01;