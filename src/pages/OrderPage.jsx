import React, { useEffect } from "react";
import rectangleOrder from "../assets/RectangleOrder.svg";
import { useCartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const { cart, getCart, increaseCount, decreaseCount, deleteProductFromCart } =
    useCartContext();
  const navigate = useNavigate();

  useEffect(() => {
    getCart();
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "60%", marginBottom: "10%" }}>
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
          <a href="/cart" style={{ color: "inherit" }}>
            Корзина/
          </a>
          Оформление заказа
        </span>
        <h3
          style={{
            display: "flex",
            alignItems: "start",
            color: "black",
            fontWeight: "bold",
            marginLeft: "7%",
            fontSize: "42px",
          }}
        >
          Оформление заказа
        </h3>
        <h5
          style={{
            display: "flex",
            alignItems: "start",
            color: "black",
            fontWeight: "bold",
            marginLeft: "7%",
            fontSize: "28px",
          }}
        >
          Закзачик
        </h5>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            marginTop: "2%",
          }}
        >
          <div
            style={{
              display: "flex",
              // width: "70%",
              flexDirection: "column",
              rowGap: "15px",
            }}
          >
            <input
              placeholder="Имя"
              style={{
                borderRadius: "10px",
                width: "80%",
                fontSize: "20px",
                height: "40px",
              }}
            />
            <input
              placeholder="E-mail"
              style={{
                borderRadius: "10px",
                width: "80%",
                fontSize: "20px",
                height: "40px",
              }}
            />
            <input
              placeholder="Почтовый индекс"
              style={{
                borderRadius: "10px",
                width: "80%",
                fontSize: "19px",
                height: "40px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // height: "80%",
              rowGap: "15px",
            }}
          >
            <input
              placeholder="Фамилия"
              style={{
                borderRadius: "10px",
                width: "80%",
                fontSize: "20px",
                height: "40px",
              }}
            />
            <input
              placeholder="Адрес"
              style={{
                borderRadius: "10px",
                width: "80%",
                fontSize: "20px",
                height: "40px",
              }}
            />
            <input
              placeholder="Номер телефона"
              style={{
                borderRadius: "10px",
                width: "80%",
                fontSize: "19px",
                height: "40px",
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "20%",
            width: "90%",
            marginTop: "4%",
          }}
        >
          <div
            style={{
              display: "flex",
              // width: "70%",
              flexDirection: "column",
              rowGap: "15px",
            }}
          >
            <h5
              style={{
                display: "flex",
                alignItems: "start",
                color: "black",
                fontWeight: "bold",
                // marginLeft: "7%",
                fontSize: "28px",
              }}
            >
              Доставка
            </h5>
            <button
              style={{
                borderRadius: "15px",
                width: "100%",
                height: "50px",
                backgroundColor: "rgba(158,110,150,0.4963235294117647)",
                border: "none",
                color: "white",
                fontFamily: '"Comfortaa", cursive',
                fontSize: "150%",
                textTransform: "capitalize",
                fontWeight: "400",
              }}
            >
              Стандарт(CDEK)
            </button>
            <button
              style={{
                borderRadius: "15px",
                width: "100%",
                height: "50px",
                backgroundColor: "rgba(158,110,150,0.4963235294117647)",
                border: "none",
                color: "white",
                fontFamily: '"Comfortaa", cursive',
                fontSize: "150%",
                textTransform: "capitalize",
                fontWeight: "400",
              }}
            >
              Самовывоз
            </button>
          </div>
          <div>
            <h5
              style={{
                display: "flex",
                alignItems: "start",
                color: "black",
                fontWeight: "bold",
                // marginLeft: "7%",
                fontSize: "28px",
              }}
            >
              Страна
            </h5>
          </div>
        </div>
        <div style={{ marginTop: "3%" }}>
          <h5
            style={{
              display: "flex",
              alignItems: "start",
              color: "black",
              fontWeight: "bold",
              marginLeft: "7%",
              fontSize: "28px",
            }}
          >
            Способ оплаты
          </h5>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: "15px",
              marginLeft: "7%",
              marginTop: "3%",
            }}
          >
            <input
              placeholder="Выбор карты"
              style={{
                borderRadius: "10px",
                width: "30%",
                fontSize: "20px",
                height: "40px",
              }}
            />
            <input
              placeholder="Имя на карте"
              style={{
                borderRadius: "10px",
                width: "50%",
                fontSize: "20px",
                height: "40px",
              }}
            />
            <input
              placeholder="Номер карты"
              style={{
                borderRadius: "10px",
                width: "50%",
                fontSize: "20px",
                height: "40px",
              }}
            />
            <input
              placeholder="Срок действия карты"
              style={{
                borderRadius: "10px",
                width: "50%",
                fontSize: "20px",
                height: "40px",
              }}
            />
            <input
              placeholder="CVV / CVC / CID"
              style={{
                borderRadius: "10px",
                width: "26%",
                fontSize: "20px",
                height: "40px",
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${rectangleOrder})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "60%",
        }}
      >
        {/* <img src={rectangleOrder} alt="order" /> */}
        <div>
          {cart.products.map((item) => (
            <div
              style={{
                backgroundColor: "white",
                height: "20%",
                width: "95%",
                margin: "5% auto",
                borderRadius: "20px",
              }}
            >
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
                  width="17%"
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
              </div>
            </div>
          ))}
        </div>
        <h3
          style={{
            alignItems: "start",
            color: "black",
            fontWeight: "bold",
            fontSize: "40px",
            display: "flex",
            paddingLeft: "5%",
          }}
        >{`Итого: ${cart.totalPrice} $`}</h3>
        <div
          style={{
            alignItems: "left",
            display: "flex",
            paddingLeft: "5%",
            paddingTop: "5%",
          }}
        >
          <button
            style={{
              borderRadius: "15px",
              width: "30%",
              height: "50px",
              backgroundColor: "#9E6E96",
              border: "none",
              color: "white",
              fontFamily: '"Comfortaa", cursive',
              fontSize: "150%",
              textTransform: "capitalize",
              fontWeight: "400",
            }}
            onClick={() => navigate("/confirm")}
          >
            Оплатить
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
