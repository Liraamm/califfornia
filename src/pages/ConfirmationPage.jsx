import React from "react";
import backConf from "../assets/BackConf.svg";

const ConfirmationPage = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backConf})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "200vh",
          width: "100%",
        }}
      >
        <div style={{ color: "white", paddingTop: "7%" }}>
          <p style={{ fontSize: "20px" }}>Ваш заказ успешно принят</p>
          <h3 style={{ fontSize: "50px", fontWeight: "bold" }}>
            Спасибо за покупку!
          </h3>
          <h6 style={{ fontSize: "25px" }}>
            Ваш заказ <p style={{ color: "#FFC700" }}>#123456789</p>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
