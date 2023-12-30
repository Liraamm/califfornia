import React, { useEffect } from "react";
import { useCartContext } from "../contexts/CartContext";
import { fontSize } from "@mui/system";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, getCart, increaseCount, decreaseCount, deleteProductFromCart } =
    useCartContext();
  const navigate = useNavigate();

  useEffect(() => {
    getCart();
  }, []);
  return (
    <div>
      <div>
        <span
          style={{
            display: "flex",
            alignItems: "start",
            color: "black",
            fontWeight: "bold",
            fontSize: "20px",
            marginBottom: "1%",
            marginLeft: "7%",
            marginTop: "3%",
          }}
        >
          <a href="/" style={{ color: "inherit" }}>
            Главная/
          </a>
          Корзина/
        </span>
        <h3
          style={{
            display: "flex",
            alignItems: "start",
            color: "black",
            fontWeight: "bold",
            marginLeft: "7%",
            fontSize: "32px",
          }}
        >
          Корзина
        </h3>
        <hr
          style={{ color: "black", width: "86%", border: "1px solid black" }}
        />
        <div>
          {cart.products.map((item) => (
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  height: "30vh",
                }}
              >
                <img
                  src={item.image}
                  alt="cartImage"
                  width="15%"
                  style={{ borderRadius: "20%" }}
                />
                <h4
                  style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  {item.title}
                </h4>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "7%",
                  }}
                >
                  <button
                    style={{
                      border: "none",
                      backgroundColor: "white",
                      fontSize: "40px",
                      fontWeight: "bold",
                    }}
                    onClick={() => {
                      if (item.count <= 1) {
                        deleteProductFromCart(item.id);
                      }
                      decreaseCount(item.id);
                    }}
                  >
                    -
                  </button>
                  <p
                    style={{
                      border: "none",
                      backgroundColor: "white",
                      fontSize: "40px",
                      fontWeight: "bold",
                    }}
                  >
                    {item.count}
                  </p>
                  <button
                    style={{
                      border: "none",
                      backgroundColor: "white",
                      fontSize: "40px",
                      fontWeight: "bold",
                    }}
                    onClick={() => {
                      increaseCount(item.id);
                    }}
                  >
                    +
                  </button>
                </div>
                <button
                  style={{
                    borderRadius: "15px",
                    width: "12%",
                    height: "19%",
                    backgroundColor: "#9E6E96",
                    border: "none",
                    color: "white",
                    fontFamily: '"Comfortaa", cursive',
                    fontSize: "150%",
                    textTransform: "capitalize",
                    fontWeight: "400",
                  }}
                  onClick={() => {
                    deleteProductFromCart(item.id);
                  }}
                >
                  Удалить
                </button>
              </div>
              <hr
                style={{
                  color: "black",
                  width: "86%",
                  border: "1px solid black",
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        style={{
          borderRadius: "15px",
          width: "19%",
          height: "22%",
          backgroundColor: "#9E6E96",
          border: "none",
          color: "white",
          fontFamily: '"Comfortaa", cursive',
          fontSize: "170%",
          textTransform: "capitalize",
          fontWeight: "400",
          marginBottom: "3%",
          marginTop: "3%",
        }}
        onClick={() => navigate("/order")}
      >
        Оформить заказ
      </button>
    </div>
  );
};

export default CartPage;
