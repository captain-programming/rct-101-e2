import React from "react";
import {Button, Modal, ModalBody, Input, Select, RadioGroup, Radio} from '@chakra-ui/react';

const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  // Button = () => <div />;
  // Modal = () => <div />;
  // ModalBody = () => <div />;
  // Input = () => <div />;
  // Select = () => <div />;
  // RadioGroup = () => <div />;
  // Radio = () => <div />;

  return (
    <>
      <Button my={4} data-cy="add-product-button">Add New Product</Button>
      <Modal>
        <ModalBody pb={6}>
          <label>Title</label>
          <Input data-cy="add-product-title" placeholder="Title" />
          <label>Category</label>
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <label>Gender</label>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <label>Price</label>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button">Create</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
