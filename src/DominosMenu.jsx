import React, { useState } from "react";
import Header from "./Header";
import productData from "./product.json";
import "./DominosMenu.css";

const DominosMenu = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const categories = productData.data.categories;

  const products =
    categories[selectedCategory]?.productList || [];

  const filteredProducts = products.filter((item) =>
    item.productName
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const addToCart = (product) => {
    const existingItem = cart.find(
      (item) =>
        item.productId === product.productId
    );

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.productId === product.productId
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  const handleProceedToPay = () => {
    setOrderPlaced(true);
    setCart([]);

    setTimeout(() => {
      setOrderPlaced(false);
    }, 5000);
  };

  const totalAmount = cart.reduce(
    (total, item) =>
      total +
      item.productSkuList[0].productSkuPrice *
        item.quantity,
    0
  );

  return (
    <>
      <Header />

      <div className="menu-container">
        {/* LEFT SIDEBAR */}
        <div className="menu-sidebar">
          <h2>Menu Categories</h2>

          {categories.map(
            (category, index) => (
              <div
                key={category.categoryId}
                className={`category-box ${
                  selectedCategory === index
                    ? "active-category"
                    : ""
                }`}
                onClick={() =>
                  setSelectedCategory(index)
                }
              >
                {category.categoryName}
              </div>
            )
          )}
        </div>

        {/* CENTER CONTENT */}
        <div className="menu-content">
          <input
            type="text"
            placeholder="Search Products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="search-box"
          />

          <h1 className="menu-title">
            {
              categories[selectedCategory]
                ?.categoryName
            }
          </h1>

          <h3 className="total-products">
            Total Products:{" "}
            {filteredProducts.length}
          </h3>

          <div className="products-grid">
            {filteredProducts.map((item) => (
              <div
                className="product-card"
                key={item.productId}
              >
                <img
                  src={
                    item.productImageList?.[0]
                  }
                  alt={item.productName}
                  className="product-image"
                />

                <h3 className="product-name">
                  {item.productName}
                </h3>

                <p className="product-description">
                  {
                    item.productDescription?.split(
                      "|||"
                    )[0]
                  }
                </p>

                <div className="product-footer">
                  <span className="product-price">
                    AED{" "}
                    {
                      item.productSkuList?.[0]
                        ?.productSkuPrice
                    }
                  </span>

                  <div>
                    <button
                      className="add-btn"
                      onClick={() =>
                        addToCart(item)
                      }
                    >
                      ADD
                    </button>

                    <div className="customisable">
                      Customisable
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CART */}
        <div className="cart-sidebar">
          <h3>🛒 Cart</h3>

          <hr />

          {orderPlaced && (
            <div
              style={{
                backgroundColor:
                  "#d4edda",
                color: "#155724",
                padding: "15px",
                borderRadius: "10px",
                marginBottom: "15px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              ✅ You have successfully
              placed your order!
            </div>
          )}

          {cart.length === 0 ? (
            <div className="cart-empty">
              <div
                style={{
                  fontSize: "80px",
                  marginBottom: "20px",
                }}
              >
                🛒
              </div>

              <h3>Cart is Empty</h3>

              <p>
                Add your favourite
                items
              </p>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={item.productId}
                  className="cart-item"
                >
                  <div className="cart-item-name">
                    {item.productName}
                  </div>

                  <div className="cart-item-quantity">
                    Quantity:{" "}
                    {item.quantity}
                  </div>

                  <div className="cart-item-price">
                    AED{" "}
                    {item.productSkuList[0]
                      .productSkuPrice *
                      item.quantity}
                  </div>
                </div>
              ))}

              <div className="cart-total-box">
                <div className="cart-total-label">
                  Grand Total
                </div>

                <div className="cart-total">
                  AED {totalAmount}
                </div>
              </div>

              <button
                className="pay-btn"
                onClick={
                  handleProceedToPay
                }
              >
                🚀 PROCEED TO PAY
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DominosMenu;