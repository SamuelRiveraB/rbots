import React from "react";
import './ImageLinkForm.css';

function ImageLinkForm() {
    return <div>
        <p className="f3">
            {"Facer(ecognition)"}
        </p>
        <div className="center">
            <div className="pa5 br3 shadow-5 center bg-pattern">
                <input type="text" className="f4 pa2 w-70 center"/>
                <button className="w-30 grow f4 link ph3 pv2 dib white bg-orange bottom-right">Go</button>  
            </div>
        </div>
    </div>
}

export default ImageLinkForm;