import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { BASE_URL } from "../utils/consts";
import $axios from "../utils/axios";
import { useSearchParams } from "react-router-dom";

const productsContext = createContext();
export function useProductsContext() {
  return useContext(productsContext);
}

const initState = {
  products: [],
  categories: [],
  product: null,
  totalProducts: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "products":
      return { ...state, products: action.payload };
    case "categories":
      return { ...state, categories: action.payload };
    case "product":
      return { ...state, product: action.payload };
    case "totalProducts":
      return { ...state, totalProducts: action.payload };
    default:
      return state;
  }
}
const ProductsContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  async function getCategory() {
    try {
      const { data } = await $axios.get(
        `${BASE_URL}categories/${window.location.search}`
      );
      // console.log(data);
      dispatch({
        type: "categories",
        payload: data.results,
      });
      dispatch({
        type: "totalProducts",
        payload: data.count,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getProducts() {
    try {
      const { data } = await $axios.get(
        `${BASE_URL}product/${window.location.search}`
      );
      dispatch({
        type: "products",
        payload: data.results,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function GetOneProduct(id) {
    try {
      const { data } = await $axios.get(`${BASE_URL}product/${id}/`);
      console.log(data);
      dispatch({
        type: "product",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function AddProduct(product) {
    try {
      await $axios.post(`${BASE_URL}product/`, product);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProduct(id) {
    try {
      await $axios.delete(`${BASE_URL}product/${id}/`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  async function editProduct(id, newData) {
    try {
      await $axios.patch(`${BASE_URL}product/${id}/`, newData);
      console.log(newData);
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //   GetOneProduct(1);
  //   console.log(state.product);
  // }, []);

  // useEffect(() => {
  //   console.log(state.categories); // Этот блок кода выполнится каждый раз при обновлении state.categories
  // }, [state.categories]);

  // console.log(state.product);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(+searchParams.get("_page" || 1));
  const value = {
    products: state.products,
    product: state.product,
    categories: state.categories,
    totalProducts: state.totalProducts,
    GetOneProduct,
    getProducts,
    AddProduct,
    getCategory,
    deleteProduct,
    editProduct,
    page,
    setPage,
  };

  return (
    <productsContext.Provider value={value}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContext;
