import React from "react";
import AppContext from "../context";

function FeedBack() {

  const {aboutFeedOpen, onOpenAboutFeed, addressOpen, onOpenAddressFeed, infoOpen,
  onOpenInfoFeed,followOpen,onOpenFollowFeed} = React.useContext(AppContext);
  return (
    <div className="feedBackBlock">
    <div className={aboutFeedOpen ? 'feedBlockOpened' : 'feedBlockClosed'}>
      <div onClick={onOpenAboutFeed} className={aboutFeedOpen ? "feedBlockTopOpened a-c" : "feedBlockTopClosed a-c"}>
        <span className="feedSpan">About</span>
        {aboutFeedOpen ? <img width="18" src="./images/minus.svg" alt="plus" /> :
       <img width="18" src="./images/plus.svg" alt="plus" />}
      </div>
      <div className="feedBlockBottom">
        <p>Founded in 2010 in Amsterdam, ETQ derived under the mindset of eliminating
       over-accessorized branding and
       focusing primarily on letting the quality of the product speak for itself. </p>
      </div>
    </div>
    <div className={addressOpen ? 'feedBlockOpened' : 'feedBlockClosed'}>
      <div onClick={onOpenAddressFeed} className={addressOpen ? "feedBlockTopOpened a-c" : "feedBlockTopClosed a-c"}>
        <span className="feedSpan">Address</span>
        {addressOpen ? <img width="18" src="./images/minus.svg" alt="plus" /> :
       <img width="18" src="./images/plus.svg" alt="plus" />}
      </div>
      <div className="feedBlockBottom">
        <p>Singel 465<br />
        1012 WP Amsterdam<br />
        The Netherlands</p>
      </div>
    </div>
    <div className={infoOpen ? 'feedBlockOpened' : 'feedBlockClosed'}>
      <div onClick={onOpenInfoFeed} className={infoOpen ? "feedBlockTopOpened a-c" : "feedBlockTopClosed a-c"}>
        <span className="feedSpan">Info</span>
        {infoOpen ? <img width="18" src="./images/minus.svg" alt="plus" /> :
       <img width="18" src="./images/plus.svg" alt="plus" />}
      </div>
      <div className="feedBlockBottom">
        <p>Shipping info<br/>
        Careers<br/>
        Wholesale</p>
      </div>
    </div>
    <div className={followOpen ? 'feedBlockOpened' : 'feedBlockClosed'}>
      <div onClick={onOpenFollowFeed} className={followOpen ? "feedBlockTopOpened a-c" : "feedBlockTopClosed a-c"}>
        <span className="feedSpan">Follow us</span>
        {followOpen ? <img width="18" src="./images/minus.svg" alt="plus" /> :
       <img width="18" src="./images/plus.svg" alt="plus" />}
      </div>
      <div className="feedBlockBottom">
        <p>Instagram<br/>
        Facebook<br/>
        Pinterest
        </p>
      </div>
    </div>
    <div className="emailBlock">
      <p className="emailTxt">Email us<br/>
      +31 (0) 20 225 61 53
      </p>
    </div>
    <div className="newsletterBlock">
      <p>Newsletter</p>
      <div className="inputBlock a-c">
        <input type="email" className="typeBlock" />
          <div className="submitBlock">
          <p>Submit</p>
          </div>
      </div>
      <p className="termsTxt">
      This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
      </p>
    </div>
  </div>
  )
}

export default FeedBack;