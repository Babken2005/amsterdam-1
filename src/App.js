import React from 'react';
import AppContext from './context';
import { Route } from 'react-router';
import axios from 'axios';

import './App.css';

import Header from './Components/Header';
import FeedBack from './Components/FeedBack';
import Block from './Components/Block';
import LT01White from './Pages/LT-01-White';
import Bag from './Pages/Bag';
import Card from './Components/Card';
import Overlay from './Components/Overlay';
import LT01PremiumSuedeNavy from './Pages/LT-01-Premium-Suede-Navy';

function App() {

  const [items, setItems] = React.useState([]);
  const [bagItems, setBagItems] = React.useState([]);
  const [menuOpened, setMenuOpened] = React.useState(false);
  const [aboutFeedOpen, setAboutFeedOpen] = React.useState(false);
  const [addressOpen, setAddressFeedOpen] = React.useState(false);
  const [infoOpen, setInfoFeedOpen] = React.useState(false);
  const [followOpen, setFollowFeedOpen] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      const bagItemsResponse = await axios.get('https://6123b066124d8800175683c3.mockapi.io/bag');
      const itemsResponse = await axios.get('https://6123b066124d8800175683c3.mockapi.io/items');
      setBagItems(bagItemsResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  const onOpenAboutFeed = () => {
    setAboutFeedOpen(!aboutFeedOpen);
  }
  const onOpenAddressFeed = () => {
    setAddressFeedOpen(!addressOpen);
  }
  const onOpenInfoFeed = () => {
    setInfoFeedOpen(!infoOpen);
  }
  const onOpenFollowFeed = () => {
    setFollowFeedOpen(!followOpen);
  }

  const onOpenMenu = () => {
    setMenuOpened(!menuOpened);
  }

  return (
    <AppContext.Provider value={{
     menuOpened, onOpenMenu, aboutFeedOpen, onOpenAboutFeed, addressOpen,
     onOpenAddressFeed,infoOpen,onOpenInfoFeed, followOpen, onOpenFollowFeed, setMenuOpened, bagItems,
    setBagItems
     }}>      
     <Header />
     <Overlay />
      <Route path="/" exact>
      <div className="content">
      <div className="contentHome">
        <div className="homeCard">
          <h4>
          Essentials for the<br />
          changing season
          </h4>
          <div className="shopBlock">
            <p>Shop now</p>
          </div>
        </div>
      </div>
      <div className="blogBlock">
        <div className="blogContent c-1">
          <img className="blogImg" src="./images/i-3.jpg" alt="img" />
          <p className="blogTitle">Modular Packaging</p>
          <p className="blogTxt">Unboxing like never before</p>
        </div>
      </div>
      <div className="modelsBlock">
        <h4 className="modelsTxt">Our favorite models</h4>
        <div className="productBlock">
          {items.map((model, index) => (
            <Card
            key={index}
            href={model.href}
            imgUrl={model.imgUrl}
            title={model.title}
            price={model.price}
            />
          ))}
        </div>  
      </div>
      <div className="blogBlock">
        <div className="blogContent">
          <img className="blogImg" src="./images/i-1.jpg" alt="img" />
          <p className="blogTitle">ETQ Laundry Store</p>
          <p className="blogTxt">Let us clean your shoes</p>
        </div>
        <div className="blogContent">
          <img className="blogImg" src="./images/i-2.jpg" alt="img" />
          <p className="blogTitle">Amsterdam Flagship Store</p>
          <p className="blogTxt">Find us at Singel 465</p>
        </div>
      </div>
      <FeedBack />
    </div>
      </Route>
    <Route path="/LT-01-White" exact>
      <LT01White />
      <FeedBack />
      <Block />
    </Route>
    <Route path="/LT-01-Premium-Suede-Navy" exact>
      <LT01PremiumSuedeNavy />
      <FeedBack />
      <Block />
    </Route>
    <Route path="/bag" exact>
      <Bag />
    </Route>
    </AppContext.Provider>
  );
}

export default App;