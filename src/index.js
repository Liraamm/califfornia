import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductsContext from "./contexts/ProductsContext";
import AuthContext from "./contexts/AuthContext";
import CartContext from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContext>
      <CartContext>
        <ProductsContext>
          <App />
        </ProductsContext>
      </CartContext>
    </AuthContext>
  </BrowserRouter>
);
