import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ADMIN, BASE_URL } from "../utils/consts";
import $axios from "../utils/axios";
import axios from "axios";

const authContext = createContext();

export function useAuthContext() {
  return useContext(authContext);
}

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  async function login(credentials) {
    try {
      const { data: tokens } = await axios.post(
        `${BASE_URL}login/`,
        credentials
      );

      localStorage.setItem("tokens", JSON.stringify(tokens));

      const { data } = await $axios.get(`${BASE_URL}account/`);
      setUser(data);
    } catch (e) {
      console.log(e);
    }
  }

  function isAdmin() {
    if (!user) {
      return false;
    }
    return ADMIN.includes(user.email);
  }

  const value = {
    user,
    login,
    isAdmin,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContext;
