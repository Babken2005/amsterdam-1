import axios from 'axios';
import React from 'react';
import ProductContent from '../Components/ProductContent';
import AppContext from '../context';

function LT01PremiumSuedeNavy() {

  const {setBagItems} = React.useContext(AppContext);

  const LT01PremiumSuedeNavy = [
    {
      "href": "http://localhost:3000/LT-01-Premium-Suede-Navy",
      "title": "LT 01 Premium Suede Navy",
      "price": 269,
      "size": 35,
      "color": "Black",
      "imgUrl": "./images/img2.jpg",
      "code": 2
    }
  ]

  const onAddToBag = (obj) => {
    axios.post('https://6123b066124d8800175683c3.mockapi.io/bag', obj);
    setBagItems(prev => [...prev, obj])
}

  return(
    <>
    {LT01PremiumSuedeNavy.map((item, index) => (
      <div key={index}>
      <img className="productPageImg" src={item.imgUrl} alt="" />
      <img className="productPageImg" src="./images/p2-2.png" alt="" />
      <img className="productPageImg" src="./images/p2-3.jpg" alt="" />
      <img className="productPageImg" src="./images/p2-4.jpg" alt="" />
      <img className="productPageImg" src="./images/p2-5.jpg" alt="" />
      <ProductContent
      title={item.title}
      price={item.price}
      size={item.size}
      imgUrl={item.imgUrl}
      onAddToBag={onAddToBag}
      color={item.color}
      code={item.code}
      href={item.href}
      />
      </div>
    ))}
    </>
  )
}

export default LT01PremiumSuedeNavy;