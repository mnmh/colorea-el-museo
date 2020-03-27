import React, { Component } from "react";
import {TimelineMax} from 'gsap';

class Pagina01 extends Component {
    constructor(props) {
        super(props);

        this.tweenIntro = null;

        this.titulo_elem = null;
        this.subtitulo_elem = null;
        this.logo_elem = null;
        this.hash_elem = null;
    }

    componentDidMount() {
        this.tweenIntro = new TimelineMax();
        this.tweenIntro.add('start')
        .fromTo(this.titulo_elem, 0.5, {autoAlpha: 0}, {autoAlpha: 1})
        ;
    }

    render() {
        return(
            <>
                <div className="slide">
                    <div className="titulo" ref={div => this.titulo_elem = div}></div>
                    <div className="subtitulo" ref={div => this.subtitulo_elem = div}></div>
                    <div className="logo" ref={div => this.logo_elem = div}></div>
                    <div className="hash" ref={div => this.hash_elem = div}></div>
                </div>
            </>
        );
    }
}

export default Pagina01;