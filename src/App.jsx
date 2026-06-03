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
<h1 style={{ textAlign: "center" , marginTop: "40px"}}>Top Categories To Order From</h1>
<Item/>
<div style={{ textAlign: "center", margin: "40px 0" }}>
  <button
    style={{
      backgroundColor: "#e31837",
      color: "white",
      border: "none",
      padding: "18px 50px",
      fontSize: "20px",
      fontWeight: "bold",
      borderRadius: "6px",
      cursor: "pointer",
      textTransform: "uppercase",
      letterSpacing: "1px",
      boxShadow: "0 4px 12px rgba(227,24,55,0.3)",
      transition: "0.3s"
    }}
  >
    VIEW MENU
  </button>
</div>
<ExclusiveDeals/>
<Footer/>
  </>
)
}
export default App;