import React, {Component} from 'react';

import Canvas from '../Canvas';

import imagen from '../../img/canvas/RENDER_03.png';

class Pagina06 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
            <div className="slide">
                <Canvas img={imagen}/>
            </div>
            </>
        );
    }
}

export default Pagina06;