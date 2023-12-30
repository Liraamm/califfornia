import React, { useEffect } from "react";
import { useProductsContext } from "../contexts/ProductsContext";
import { useParams } from "react-router-dom";
import { BASE_URL2 } from "../utils/consts";
import edit from "../assets/Edit.svg";
import { useAuthContext } from "../contexts/AuthContext";

const DetailPage = () => {
  const { GetOneProduct, product } = useProductsContext();
  const { isAdmin } = useAuthContext();
  const { id } = useParams();

  useEffect(() => {
    document.body.classList.add("DetailPage");
    return () => {
      document.body.classList.remove("DetailPage");
    };
  }, []);

  useEffect(() => {
    GetOneProduct(id);
    console.log(product);
  }, []);

  return (
    <div style={{ marginTop: "9%" }}>
      {product && (
        <span
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
          <a href="/catalog" style={{ color: "inherit" }}>
            Каталог/
          </a>
          {product.title}
        </span>
      )}
      {product && (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <img
            src={product.image}
            alt={product.id}
            style={{
              width: "30%",
              borderRadius: "4%",
              boxShadow: " 1px 2px 12px 9px rgba(0, 0, 0, 0.2)",
            }}
          />
          <div style={{ marginTop: "5%", width: "40%" }}>
            <h5
              style={{
                fontSize: "35px",
                color: "#302340",
                fontWeight: "800",
                textTransform: "capitalize",
                // marginRight: "100%",
                textAlign: "start",
              }}
            >
              {product.title}
            </h5>
            <p
              style={{
                fontSize: "20px",
                color: "black",
                textAlign: "start",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              {product.description}
            </p>
            <h3
              style={{
                fontSize: "40px",
                color: "#6A205E",
                fontWeight: "900",
                textAlign: "left",
              }}
            >
              {product.price} $
            </h3>
          </div>
        </div>
      )}
      {product && (
        <div
          style={{
            textAlign: "left",
            marginLeft: "10%",
            marginTop: "6%",
            marginBottom: "8%",
          }}
        >
          <h5
            style={{
              fontSize: "35px",
              color: "#302340",
              fontWeight: "800",
              textTransform: "capitalize",
              textAlign: "start",
            }}
          >
            Описание
          </h5>
          <p
            style={{
              fontSize: "18px",
              color: "black",
              textAlign: "start",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            {product.description2}
          </p>
        </div>
      )}
      {isAdmin() ? (
        <div style={{ textAlign: "end", margin: "0 3% 5% 3%" }}>
          <img src={edit} alt="edit" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DetailPage;
