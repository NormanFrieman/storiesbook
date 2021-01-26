import React, { useState } from "react";
import { FiX } from "react-icons/fi";

import "./style.css";

function NewStory(){
    const [url, setUrl] = useState("");

    function exitWindow(){
        document.querySelector(".offBackground").style.display = "none";
    };

    return (
        <div className="offBackground">
            <div className="newStory">
                <p className="exit" onClick={() => exitWindow()}><FiX /></p>
                <p className="title">Paste the url of the image you want to post just below</p>
                <input
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                />
                <button type="button">POST</button>
            </div>
        </div>
    );
}

export default NewStory;