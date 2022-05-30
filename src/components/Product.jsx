import React from "react";
import {Text, Image, Box, Stack, Heading, Tag, TagLabel} from "@chakra-ui/react"
import { useState } from "react";
import { useEffect } from "react";

const Product = () => {
  const [product, setProduct]=useState("");

  useEffect( ()=>{
    fetch(" http://localhost:8080/products")
    .then((r) => r.json())
    .then((d) => {
      setProduct(d);
    });
  }, []);

  // console.log(product);
  // TODO: Remove below const and instead import them from chakra
  // Text = () => <div />;
  // Image = () => <div />;
  // Box = () => <div />;
  // Stack = () => <div />;
  // Heading = () => <div />;
  // Tag = () => <div />;
  // TagLabel = () => <div />;
  return (
    <div>
    {product.map((p) =>( <Stack data-cy="product">
      
      <Image data-cy="product-image" src={p.imageSrc}/>
      <Text data-cy="product-category">{p.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{p.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{p.title}</Heading>
      <Box data-cy="product-price">{p.price}</Box>
    </Stack>))}
    </div>
  );
};

export default Product;
