import React, { useEffect, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";
import { useProductsContext } from "../contexts/ProductsContext";
import { useSearchParams } from "react-router-dom";
import { LIMIT } from "../utils/consts";

const Filter = () => {
  const { setPage } = useProductsContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.get("category") || "all"
  );

  const handleChange = (_, value) => {
    value && setCategory(value);
  };

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);

    if (category === "all") {
      const { _limit, _page } = currentParams;

      setSearchParams({
        _limit: LIMIT,
        _page: _page || 1,
      });
    } else {
      setSearchParams({
        ...currentParams,
        category,
        _page: 1,
      });
      setPage(1);
    }
  }, [category]);

  const CustomToggleButtonGroup = styled(ToggleButtonGroup)((theme) => ({
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    width: "120%",
  }));

  const CustomToggleButton = styled(ToggleButton)((theme) => ({
    fontSize: "23px",
    fontWeight: "bold",
    fontFamily: "'Comfortaa', cursive",
    height: "10vh",
    textTransform: "capitalize",
    color: "#6A205E",
    "&:hover": {
      backgroundColor: "#6A205E",
      color: "white",
    },
    "&.Mui-selected": {
      color: "#6A205E",
      border: "solid 6px #6A205E",
    },
  }));

  return (
    <CustomToggleButtonGroup
      exclusive
      aria-label="Platform"
      value={category}
      onChange={handleChange}
    >
      <CustomToggleButton
        style={{
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px",
          border: "solid 6px",
        }}
        value="all"
      >
        Все товары
      </CustomToggleButton>

      <CustomToggleButton
        style={{
          borderLeft: "solid 6px",
          borderRight: "solid 6px",
          borderBottom: "solid 6px",
        }}
        value="parfium"
      >
        Парфюмерия
      </CustomToggleButton>
      <CustomToggleButton
        style={{ borderLeft: "solid 6px", borderRight: "solid 6px" }}
        value="dekorativnaia-kosmetika"
      >
        Декоративная косметика
      </CustomToggleButton>
      <CustomToggleButton
        style={{
          borderBottomRightRadius: "20px",
          borderBottomLeftRadius: "20px",
          border: "solid 6px",
        }}
        value="ukhodovaia-kosmetika"
      >
        Уходовая косметика
      </CustomToggleButton>
    </CustomToggleButtonGroup>
  );
};

export default Filter;
