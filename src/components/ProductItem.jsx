import React from "react";

import purpleThing from "../assets/PurpleThing.svg";
import { Button } from "@mui/material";
import { useProductsContext } from "../contexts/ProductsContext";
import { useNavigate } from "react-router-dom";
import { BASE_URL2 } from "../utils/consts";
import { useCartContext } from "../contexts/CartContext";

const ProductItem = ({ item }) => {
  const navigate = useNavigate();
  const { isAlreadyInCart, deleteProductFromCart, addProductToCart } =
    useCartContext();

  return (
    <div
      style={{
        width: "281px",
        height: "295px",
        backgroundColor: "black",
        // borderRadius: "5%",
        position: "relative",
        borderTopLeftRadius: "5%",
        borderTopRightRadius: "5%",
        boxShadow: "1px 2px 9px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <img
        src={item.image}
        // src={`${BASE_URL2}`}
        alt="productImage"
        style={{
          objectFit: "cover",
          height: "100%",
          width: "100%",
          borderTopLeftRadius: "5%",
          borderTopRightRadius: "5%",
        }}
      />
      <img
        src={purpleThing}
        alt="purpleThing"
        style={{ position: "absolute", top: "61%", left: "0" }}
      />
      <div
        style={{
          display: "flex",
          position: "absolute",
          color: "white",
          justifyContent: "space-around",
          top: "75%",
          left: "7%",
          flexWrap: "wrap",
        }}
      >
        <h4 style={{ fontWeight: "500", width: "80%", textAlign: "left" }}>
          {item.title}
        </h4>
      </div>
      <div
        style={{
          display: "flex",
          position: "absolute",
          color: "white",
          justifyContent: "space-around",
          top: "82%",
          left: "70%",
          fontSize: "140%",
          fontWeight: "600",
        }}
      >
        <p>{item.price}$</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "5%",
        }}
      >
        {isAlreadyInCart(item.id) ? (
          <Button
            className="Catalog"
            onClick={() => deleteProductFromCart(item.id)}
            sx={{
              borderRadius: "20px",
              width: "45%",
              backgroundColor: "#6A205E",
              fontFamily: '"Comfortaa", cursive',
              fontSize: "100%",
              textTransform: "capitalize",
              color: "#ffff",
              boxShadow: "1px 2px 9px 5px rgba(0, 0, 0, 0.2)",
              fontWeight: "600",
            }}
          >
            Убрать из корзины
          </Button>
        ) : (
          <Button
            className="Catalog"
            onClick={() => addProductToCart(item)}
            sx={{
              borderRadius: "20px",
              width: "45%",
              backgroundColor: "#6A205E",
              fontFamily: '"Comfortaa", cursive',
              fontSize: "100%",
              textTransform: "capitalize",
              color: "#ffff",
              boxShadow: "1px 2px 9px 5px rgba(0, 0, 0, 0.2)",
              fontWeight: "600",
            }}
          >
            В корзину
          </Button>
        )}

        <Button
          className="Contacts"
          sx={{
            borderRadius: "20px",
            width: "45%",
            backgroundColor: "white",
            border: "3px solid #6A205E",
            color: "#6A205E",
            fontFamily: '"Comfortaa", cursive',
            fontSize: "100%",
            textTransform: "capitalize",
            boxShadow: "1px 2px 9px 5px rgba(0, 0, 0, 0.2)",
            fontWeight: "600",
          }}
          onClick={() => navigate(`/catalog/${item.id}/`)}
        >
          Подробнее
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
