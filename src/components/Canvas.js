import React, { Component } from 'react';
import p5 from 'p5';

import Paleta from './Paleta';

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            canvas: null,
            color: 'color_1'
        }
    }

    componentDidMount() {
        let self = this;
        let drawingBoard;

        var s = function(p) {
            let img;
            let sW;

            p.preload = function() {
                img = p.loadImage(self.props.img);
            }

            p.setup = function(){
                p.createCanvas(800,450);
                drawingBoard = p.createGraphics(800,450);
                p.background(255);
                p.image(img, 0, 0, 800,450);
                sW = 30;
            }

            p.draw = function() {
                p.background(255);
                p.image(drawingBoard, 0, 0);
                p.image(img, 0, 0, 800,450);
            }

            p.mouseDragged = function() {
                drawingBoard.stroke(100);
                drawingBoard.strokeWeight(sW);
                drawingBoard.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
            }
        }

        var canvas_draw = new p5(s, 'canvas');

        this.setState({
            canvas: canvas_draw
        })
    }

    componentWillUnmount() {
        this.state.canvas.remove();
    }

    render() {
        return(
            <>
                <div className="paleta">
                    <Paleta color={[0,0,0]} />
                    <Paleta color={[245,232,88]} />
                    <Paleta color={[144,245,88]} />
                    <Paleta color={[88,177,245]} />
                    <Paleta color={[163,97,72]} />
                    <Paleta color={[243,166,206]} />
                    <Paleta color={[240,72,72]} />
                    <Paleta color={[240,166,24]} />
                    <Paleta color={[197,240,24]} />
                    <Paleta color={[166,24,240]} />
                    <Paleta color={[40,24,240]} />
                    <div className="bloque herramientas">
                        <div className="item borrador"></div>
                        <div className="item size_1"></div>
                        <div className="item size_2"></div>
                        <div className="item size_3"></div>
                        <div className="item size_4 active"></div>
                    </div>
                </div>
                <div
                    id="canvas"
                ></div>
            </>
        );
    }
}

export default Canvas;