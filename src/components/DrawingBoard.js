import React, { Component } from "react";

class  DrawingBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            block: ''
        }
    }

    render() {
        return (<>
            <div id="container">
                <h1>Colorea el Museo</h1>
                <div className="listado">
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                </div>
            </div>
        </>);
    }
}

export default DrawingBoard;