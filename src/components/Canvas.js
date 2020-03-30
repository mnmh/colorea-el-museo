import React, { Component } from 'react';
import p5 from 'p5';

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
                    
                </div>
                <div
                    id="canvas"
                ></div>
            </>
        );
    }
}

export default Canvas;