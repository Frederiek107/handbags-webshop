import React from "react";
import bag1 from "./assets/bag_1.png";

function Product ({label,image,description,price}) {
    return (
        <article>
        <span>{label}</span>
        <img src={image}/>
        <p>{description}</p>
        <h4>€{price},-</h4>
        </article>
    )
}

export default Product;