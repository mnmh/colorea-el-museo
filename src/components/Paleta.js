import React from 'react';

var opacity = [1, 0.8, 0.6, 0.4, 0.2];

var Paleta = props => {
    return(
        <>
        <div className="bloque color">
        {
            opacity.map((opa, i) => {
                return(
                    <div
                        className="item"
                        style={{backgroundColor: `rgba(${props.color[0]},${props.color[1]},${props.color[2]},${opa})`}}
                        data-item={i}
                    ></div>
                )
            })
        }
        </div>
        </>
    );
}

export default Paleta;