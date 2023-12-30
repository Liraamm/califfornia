import React, { useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSearchParams } from "react-router-dom";
import { useProductsContext } from "../contexts/ProductsContext";

const PaginationProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { totalProducts, page, setPage } = useProductsContext();

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);

    setSearchParams({
      ...currentParams,
      _page: page,
    });
  }, [page]);

  return (
    <Stack spacing={2}>
      <Pagination
        count={totalProducts}
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={(_, val) => setPage(val)}
      />
    </Stack>
  );
};

export default PaginationProducts;
