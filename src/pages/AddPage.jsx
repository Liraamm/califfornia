import React, { useEffect, useState } from "react";
import addPhoto from "../assets/AddPhoto.svg";
import { useProductsContext } from "../contexts/ProductsContext";
import { MenuItem, Select } from "@mui/material";

const AddPage = () => {
  const { AddProduct, getProducts, getCategory, categories } =
    useProductsContext();
  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    description2: "",
    price: "",
    image: "",
    category: "",
  });

  useEffect(() => {
    document.body.classList.add("DetailPage");
    return () => {
      document.body.classList.remove("DetailPage");
    };
  }, []);

  useEffect(() => {
    getCategory();
  }, []);

  function handleChange(e) {
    if (e.target.name === "image") {
      setFormValue({
        ...formValue,
        image: e.target.files[0],
      });
    } else {
      setFormValue({
        ...formValue,
        [e.target.name]: e.target.value,
      });
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formValue.title.trim() ||
      !formValue.description.trim() ||
      !formValue.description2.trim() ||
      !formValue.price
    ) {
      return;
    }

    const data = new FormData(event.currentTarget);

    AddProduct(data);

    setFormValue({
      title: "",
      description: "",
      description2: "",
      price: "",
      image: "",
      category: "",
    });
  };

  return (
    <div style={{ marginTop: "7%" }}>
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
        Добавить товар/
      </span>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {/* <img
            src={addPhoto}
            alt="add"
            style={{
              width: "30%",
              borderRadius: "4%",
              // boxShadow: " 1px 2px 12px 9px rgba(0, 0, 0, 0.2)",
            }}
            value={formValue.image}
            type="file"
            name="image"
            onChange={handleChange}
          /> */}
          <label htmlFor="fileInput">
            <img
              src={addPhoto}
              alt="add"
              style={{
                borderRadius: "4%",
              }}
            />
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            name="image"
            onChange={handleChange}
          />
          <div
            style={{
              marginTop: "5%",
              width: "40%",
              height: "400px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <input
              placeholder="Введите название"
              style={{
                height: "30%",
                border: "none",
                borderRadius: "15px",
                fontWeight: "bold",
                fontSize: "30px",
              }}
              value={formValue.title}
              name="title"
              onChange={handleChange}
            />
            <input
              placeholder="Введите описание"
              style={{
                height: "70%",
                border: "none",
                borderRadius: "15px",
                marginTop: "3%",
                fontWeight: "bold",
              }}
              value={formValue.description}
              name="description"
              onChange={handleChange}
            />
            <input
              placeholder="Цена"
              style={{
                height: "20%",
                border: "none",
                width: "15%",
                borderRadius: "15px",
                fontWeight: "bold",
                marginTop: "3%",
              }}
              value={formValue.price}
              name="price"
              onChange={handleChange}
            />
            <Select
              sx={{
                width: "80%",
                marginTop: "3%",
                backgroundColor: "white",
              }}
              value={formValue.category}
              name="category"
              label="Выберите категорию"
              onChange={handleChange}
              placeholder="Выберите категорию"
            >
              {categories.map((category) => (
                <MenuItem key={category.slug} value={category.slug}>
                  {category.title}
                </MenuItem>
              ))}
            </Select>
          </div>
          {/* <div style={{ width: "30%" }}></div> */}
        </div>
        <div
          style={{
            textAlign: "left",
            marginLeft: "10%",
            marginTop: "6%",
            marginBottom: "8%",
            height: "70%",
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
          <input
            placeholder="Введите дополнительное описание"
            style={{
              height: "15em",
              width: "90%",
              border: "none",
              borderRadius: "15px",
              marginTop: "3%",
              fontWeight: "bold",
            }}
            name="description2"
            value={formValue.description2}
            onChange={handleChange}
          />
        </div>
        <div style={{ textAlign: "end" }}>
          <button
            style={{
              width: "14%",
              height: "55px",
              borderRadius: "10px",
              backgroundColor: "#6A205E",
              fontFamily: '"Comfortaa", cursive',
              fontSize: "150%",
              fontWeight: "600",
              textTransform: "capitalize",
              color: "#ffff",
              marginRight: "5%",
              marginBottom: "3%",
            }}
          >
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPage;
