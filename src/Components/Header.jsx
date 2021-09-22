import axios from 'axios';
import React from 'react';
import AppContext from '../context';
import BagProductBlock from './BagProductBlock';

function Header() {

  const {onOpenMenu, menuOpened, setMenuOpened, bagItems, setBagItems} = React.useContext(AppContext);
  const [bagOpened, setBagOpened] = React.useState(false);

  const onOpenBag = () => {
    setBagOpened(!bagOpened);
    setMenuOpened(!menuOpened);
  }
  const onCloseBag = () => {
    setBagOpened(!bagOpened);
    setMenuOpened(!menuOpened);
  }

  const onRemoveItem = (obj) => {
    axios.delete(`https://6123b066124d8800175683c3.mockapi.io/bag/${obj.code}`);
    setBagItems(prev => prev.filter(product => product.code !== obj.code))
  }

  const totalPrice = bagItems.reduce((sum, obj) => obj.price + sum, 0);

  return(
    <>
    <header className={menuOpened ? 'contentHeader contentHeaderOpened' : 'contentHeader'}>
    <div className={bagOpened ? "headerTop a-c border-bottomUnset" : "headerTop a-c"}>
    <div className="headerLeft">
    {menuOpened ? <img className={bagOpened ? 'hidden-op' : null}
     onClick={onOpenMenu} width="26" src="./images/close.svg" alt="menu" /> :
    <img onClick={onOpenMenu} width="24" src="./images/menu.svg" alt="menu" />
    }
    </div>
    <div className="headerCenter">
    <a href="/">
    <img width="75" src="./images/logo.svg" alt="logo" />
    </a>
    </div>
    <div className="headerRight">
      {bagOpened ? <img onClick={onCloseBag} width="26" src="./images/close.svg" alt="menu" />
      : <div onClick={onOpenBag} className="bag a-c j-c">
        <span className="bagQuantity">{bagItems.length}</span>
      </div>}
    </div>
    </div>
    <div className={bagOpened ? "headerBottom" : "headerBottom hidden"}>
    <div className="bagBlock">
      {bagItems.length > 0 ? 
       <>
       <div className="productsBlock">
       {bagItems.map((item, index) => (
         <BagProductBlock
         key={index}
         imgUrl={item.imgUrl}
         title={item.title}
         color={item.color}
         size={item.size}
         price={item.price}
         code={item.code}
         onRemoveItem={onRemoveItem}
         />
       ))}
       </div>
       <div className="subTotalBlock a-c">
         <p>Subtotal:</p>
         <p>€{totalPrice}</p>
       </div>
       <div className="checkoutBlock">
         <div className="checkoutBtn j-c a-c">
           <p>Checkout</p>
         </div>
       </div>
       </> :
       <p className="emptyTxt">Your bag is currently empty</p>
      }
    </div>
    </div>
  </header>
    </>
  )
}

export default Header;