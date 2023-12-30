import React, { useEffect } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const AuthPage = () => {
  const { login, user } = useAuthContext();
  useEffect(() => {
    document.body.classList.add("AuthPage");
    return () => {
      document.body.classList.remove("AuthPage");
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login(data);
    console.log(user);
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div style={{ backgroundColor: "#E2CCFF", marginTop: "5%" }}>
      <h4 style={{ fontWeight: "700", color: "#302340", fontSize: "200%" }}>
        Вход в аккаунт
      </h4>
      <hr
        style={{
          backgroundColor: "#302340",
          width: "25%",
          height: "2px",
          boxShadow: "-1px 12px 9px -3px rgba(41, 41, 41, 0.29)",
        }}
      />
      <h4 style={{ fontWeight: "600", color: "#302340", marginTop: "3%" }}>
        Добро пожаловать!
      </h4>
      <div
        style={{
          marginTop: "4%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <form onSubmit={handleSubmit}>
          <p style={{ fontSize: "20px", fontWeight: "600", color: "#302340" }}>
            Логин
          </p>
          <input
            style={{
              borderRadius: "22px",
              border: "none",
              width: "22%",
              height: "55px",
            }}
            id="email"
            name="email"
          />
          <p
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#302340",
              marginTop: "2%",
            }}
          >
            Пароль
          </p>
          <input
            style={{
              borderRadius: "22px",
              border: "none",
              width: "22%",
              height: "55px",
            }}
            id="password"
            name="password"
          />
          <button className="buttonAuth" sx={{ width: "100%", height: "30%" }}>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
