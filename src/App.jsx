import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Mainarea from "./Mainarea";
import Item from "./Item";
import ExclusiveDeals from "./ExclusiveDeals";
import Footer from "./Footer";
import DominosMenu from "./DominosMenu";

import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  return (
    <>
      <Header />

      <Mainarea />

      <h1
        style={{
          textAlign: "center",
          marginTop: "40px"
        }}
      >
        Top Categories To Order From
      </h1>

      <Item />

      <div
        style={{
          textAlign: "center",
          margin: "40px 0"
        }}
      >
        <button
          onClick={() => navigate("/menu")}
          style={{
            backgroundColor: "#e31837",
            color: "white",
            border: "none",
            padding: "15px 30px",
            fontSize: "20px",
            fontWeight: "bold",
            borderRadius: "8px",
            cursor: "pointer",
            textTransform: "uppercase",
            letterSpacing: "1px",
            boxShadow: "0 4px 12px rgba(227,24,55,0.3)"
          }}
        >
          VIEW MENU
        </button>
      </div>

      <ExclusiveDeals />

      <Footer />
    </>
  );
};

const App = () => {

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/menu"
        element={<DominosMenu />}
      />

    </Routes>

  );
};

export default App;