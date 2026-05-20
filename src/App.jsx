import React from "react";
import Header from "./Header";
import Mainarea from "./Mainarea";
import Item from "./Item";
import ExclusiveDeals from "./ExclusiveDeals";
import Footer from "./Footer";
const App=()=>{
return(
  <>
<Header/>
<Mainarea/>
<h1 style={{ textAlign: "center" }}>Top Categories To Order From</h1>
<br></br>
<Item/>
<h1 style={{ textAlign: "center", color:"red" }}>View Menus</h1>
<ExclusiveDeals/>
<Footer/>
  </>
)
}
export default App;