import React, { Component } from 'react';
import p5 from 'p5';
import "p5/lib/addons/p5.dom";

class Canvas_01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            canvas: null,
            color: 'color_1'
        }
    }
}

export default Canvas_01;