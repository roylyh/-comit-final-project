import React from 'react';

function Iframe(props) {
    let stylei = {
        border:0,
    };
    return(
        <div>
            <iframe src={props.src} width={props.width} height={props.height} frameborder={props.frameborder} style={stylei} allowfullscreen={props.allowfullscreen} />
        </div>
    )
}

export default Iframe;