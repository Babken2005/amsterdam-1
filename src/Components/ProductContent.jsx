import React from "react";

function ProductContent({title, price, size, imgUrl, onAddToBag, color, code, isItemAdded, onOpenSizeBlock}) {
 
  const onPlus = () => {
    onAddToBag({imgUrl, title, price, size, color, code});
  }

  return (
    <div className="productContent">
    <div className="productContentBlock">
    <p className="productTitle-Price">LT 01 White - €249</p>  
      <div className="buttonsBlock a-c">
        <div onClick={onOpenSizeBlock} className="sizeButton a-c">
          <p>Size - {size}</p>
          <img width="8" src="./images/down.svg" alt="down" />
        </div>
        {isItemAdded(code) ?
        <div onClick={onPlus} className="addedButton a-c">
        <p>Added to bag !</p>
        </div> :
        <div onClick={onPlus} className="addButton a-c">
        <p>Add to bag</p>
        </div>}
      </div>
    </div>
  </div>
  )
}

export default ProductContent;