import React from "react";
import AppContext from "../context";

function Overlay() {

  const {menuOpened} = React.useContext(AppContext);

  return (
    <>
    {menuOpened ? <div className="overlay"></div> : null}
    </>
  )
}

export default Overlay;