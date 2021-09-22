import React from "react";

function Card({href, imgUrl, title, price}) {
  return (
    <article className="product">
        <a href={href}>
          <img className="productImg" src={imgUrl} alt="img" />
          </a>
          <p className="productTitle">{title}</p>
          <p className="productPrice">€{price}</p>
        </article>
  )
}

export default Card;