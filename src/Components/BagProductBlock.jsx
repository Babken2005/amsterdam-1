import React from "react";

function BagProductBlock({title, price, color, size, imgUrl, code, onRemoveItem}) {

  const onClickRemove = () => {
    onRemoveItem({code});
  }

  return (
    <div className="bagProductBlock">
    <img width="65" src={imgUrl} alt="" />
    <div className="bagProductContent">
      <div className="bagProductTitle-price a-c">
        <p className="bagProductTitle">{title}</p>
        <p>€{price}</p>
      </div>
      <div className="bagProductColor">
        <p className="bagProductSize">{color}</p>
      </div>
      <div className="productSize-removeBtn a-c">
      <p className="bagProductSize">EU {size}</p>
      <div className="removeBtn">
        <p onClick={onClickRemove}>Remove</p>
      </div>
      </div>
    </div>
  </div>
  )
}

export default BagProductBlock;