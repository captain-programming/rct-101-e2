import React from "react";
import AddProduct from "./AddProduct";
import Product from "./Product";
import Pagination from "./Pagination";
import { Flex, Grid } from "@chakra-ui/react";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // Flex = () => <div />;
  // Grid = () => <div />;

  return (
    <Flex justifyContent='center' bg='white' border='1px solid #eeeeee' width='80%' margin='auto' borderRadius='10px' marginTop='30px'>
      <AddProduct/>
      <Grid>{/* List of Products */} <Product/></Grid>
      {/* Pagination */}
      <Pagination/>
    </Flex>
  );
};

export default Products;
