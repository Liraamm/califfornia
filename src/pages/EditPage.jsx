import React, { useEffect, useState } from "react";
import { useProductsContext } from "../contexts/ProductsContext";
import { useNavigate, useParams } from "react-router-dom";
import { MenuItem, Select } from "@mui/material";
import addPhoto from "../assets/AddPhoto.svg";

export const EditPage = () => {
  const navigate = useNavigate();
  const {
    editProduct,
    deleteProduct,
    getCategory,
    GetOneProduct,
    product,
    categories,
  } = useProductsContext();
  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    description2: "",
    price: "",
    image: "",
    category: "",
  });

  const { id } = useParams();

  useEffect(() => {
    getCategory();
    GetOneProduct(id);
  }, []);

  useEffect(() => {
    product && setFormValue(product);
  }, [product]);

  useEffect(() => {
    document.body.classList.add("DetailPage");
    return () => {
      document.body.classList.remove("DetailPage");
    };
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

    if (!formValue.image) {
      data.delete("image");
      editProduct(id, data);
    } else {
      editProduct(id, data);
    }
    navigate("/catalog");
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
        Изменить товар/
      </span>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <label htmlFor="fileInput" style={{ width: "40%" }}>
            <img
              src={formValue.image}
              alt="add"
              style={{
                borderRadius: "4%",
                width: "80%",
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
        <span
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "3%",
          }}
        >
          <button
            style={{
              width: "15%",
              height: "55px",
              borderRadius: "10px",
              backgroundColor: "#6A205E",
              fontSize: "150%",
              fontWeight: "600",
              textTransform: "capitalize",
              color: "#ffff",
              marginRight: "5%",
            }}
          >
            Сохранить
          </button>
        </span>
      </form>

      <span style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          style={{
            width: "15%",
            height: "55px",
            borderRadius: "10px",
            backgroundColor: "#6A205E",
            fontSize: "150%",
            fontWeight: "600",
            textTransform: "capitalize",
            color: "#ffff",
            marginRight: "30%",
          }}
          onClick={() => {
            deleteProduct(product.id);
            navigate("/catalog");
          }}
        >
          Удалить
        </button>
      </span>
    </div>
  );
};

export default EditPage;
