import React from "react";
import "tachyons";

function Card(props) {
    return <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src={`https://robohash.org/${props.id}`} alt="robot" />
        <div>
            <h2>{props.name}</h2>
            <p>{props.user}</p>
            <p>{props.mail}</p>
        </div>
    </div>
}

export default Card;