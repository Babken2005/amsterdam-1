import axios from 'axios';
import React from 'react';
import ProductContent from '../Components/ProductContent';
import AppContext from '../context';

function LT01White() {

  const {setBagItems, bagItems} = React.useContext(AppContext);
  const [isSizeBlockOpened, setIsSizeBlockOpened] = React.useState(false);

  const LT01White = [
       {
      "href": "http://localhost:3000/LT-01-White",
      "title": "LT 01 White",
      "price": 249,
      "size": 35,
      "color": "White",
      "imgUrl": "./images/img1.jpg",
      "code": 1
    }
  ]

  const onAddToBag = (obj) => {
    if (bagItems.find(product => product.code === obj.code)) {
      axios.delete(`https://6123b066124d8800175683c3.mockapi.io/bag/${obj.code}`);
      setBagItems(prev => prev.filter(product => product.code !== obj.code));
    }
    else {
      axios.post('https://6123b066124d8800175683c3.mockapi.io/bag', obj);
      setBagItems(prev => [...prev, obj]);
    }
}

  const isItemAdded = (code) => {
  return bagItems.some(product => product.code === code)
  }

  const onOpenSizeBlock = () => {
    setIsSizeBlockOpened(!isSizeBlockOpened);
    LT01White.map((obj) => obj.size = 38);
    console.log(LT01White);
  }

  const onCloseSizeBlock = () => {
    setIsSizeBlockOpened(false);
  }

  return(
    <>
    <div onClick={onCloseSizeBlock} className={isSizeBlockOpened ? "sizeOverlayOp-0" : "sizeOverlay"}></div>
        <div className={isSizeBlockOpened ? "sizeSelectingBlock sizeSelectingBlockOpened" : "sizeSelectingBlock" }>
          <div className="blockTop a-c j-c">
          <p className="sizeBlockTitle">LT 01 White - €249</p>
          </div>
          <div className="blockCenter">
            <div className="sizeList">
              <div className="sizeListBlock">
                <p>EU 35</p>
              </div>
              <div className="sizeListBlock">
                <p>EU 36</p>
              </div>
              <div className="sizeListBlock">
                <p>EU 39 | US 6 | UK 5</p>
              </div>
              <div className="sizeListBlock">
                <p>EU 40 | US 7 | UK 6</p>
              </div>
              <div className="sizeListBlock">
                <p>EU 41 | US 8 | UK 7</p>
              </div>
              <div className="sizeListBlock">
                <p>EU 42 | US 9 | UK 8</p>
              </div>
              <div className="sizeListBlock">
                <p>EU 43 | US 10 | UK 9</p>
              </div>
              <div className="sizeListBlock">
                <p>EU 44 | US 11 | UK 10</p>
              </div>
              <div className="sizeListBlock">
                <p>EU 45 | US 12 | UK 11</p>
              </div>
              <div className="sizeListBlock">
                <p>EU 46 | US 13 | UK 12</p>
              </div>
              <div className="sizeListBlock">
                <p>EU 47 | US 13 | UK 12</p>
              </div>
            </div>
          </div>
          <div className="blockBottom">
            <div className="selectSizeButton a-c j-c">
              <p>Select size</p>
            </div>
          </div>
        </div>
    {LT01White.map((item, index) => (
      <div key={index}>
      <img className="productPageImg" src={item.imgUrl} alt="" />
      <img className="productPageImg" src="./images/p-2.png" alt="" />
      <img className="productPageImg" src="./images/p-3.jpg" alt="" />
      <img className="productPageImg" src="./images/p-4.jpg" alt="" />
      <img className="productPageImg" src="./images/p-5.jpg" alt="" />
      <ProductContent
      title={item.title}
      price={item.price}
      size={item.size}
      imgUrl={item.imgUrl}
      onAddToBag={onAddToBag}
      color={item.color}
      code={item.code}
      href={item.href}
      isItemAdded={isItemAdded}
      onOpenSizeBlock={onOpenSizeBlock}
      />
      </div>
    ))}
    </>
  )
}

export default LT01White;