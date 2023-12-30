import React, { useEffect } from "react";

import Back from "../assets/unsplash_62vi3TG5EDg.svg";
import addProduct from "../assets/addProduct.svg";
import { useProductsContext } from "../contexts/ProductsContext";
import ProductItem from "../components/ProductItem";
import { useAuthContext } from "../contexts/AuthContext";
import Filter from "../components/Filter";
import { display } from "@mui/system";
import { useNavigate, useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";

const CatalogPage = () => {
  const { isAdmin } = useAuthContext();
  const { getProducts, products } = useProductsContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);

    getProducts();
  }, [searchParams]);
  return (
    <div style={{ marginTop: "5%" }}>
      {/* <span
        style={{
          display: "flex",
          alignItems: "start",
          color: "black",
          fontWeight: "bold",
          fontSize: "25px",
          marginBottom: "3%",
          marginLeft: "7%",
        }}
      >
        <a href="/" style={{ color: "inherit" }}>
          Главная/
        </a>
        Добавить товар/
      </span> */}
      <div style={{ position: "relative", marginBottom: "7%" }}>
        <img src={Back} style={{ width: "100%" }} alt="back" />
        <p
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "60px",
          }}
        >
          Все товары
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          // gap: "0px",
          // alignItems: "center",
        }}
      >
        <span
          style={{
            marginLeft: "2%",
            // display: "flex",
            // justifyContent: "left",
            width: "30%",
          }}
        >
          <Filter />
        </span>
        <span style={{ display: "flex", justifyContent: "right" }}>
          <div
            style={{
              // justifyContent: "right",
              display: "flex",
              width: "80%",
              gap: "20px",
              flexWrap: "wrap",
              marginBottom: "10%",
              rowGap: "90px",
              // justifyContent: "space-evenly",
            }}
          >
            {isAdmin() ? (
              <img
                src={addProduct}
                alt="add"
                style={{
                  boxShadow: " 1px 2px 12px 9px rgba(0, 0, 0, 0.2)",
                  borderRadius: "20px",
                }}
                onClick={() => navigate("/add")}
              />
            ) : (
              ""
            )}

            {products.map((item) => (
              <ProductItem item={item} key={item.id} />
            ))}
          </div>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "3%",
        }}
      >
        <Pagination />
      </div>
    </div>
  );
};

export default CatalogPage;
