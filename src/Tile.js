import React from "react";
import story from "./assets/our_story.png";

function Tile ({title, image, text, text2}) {
    return (
        <section>
            <h2>{title}</h2>
            <img src={image}/>
            <p>{text}</p>
            <p>{text2}</p>
    </section>
    )
}

export default Tile;