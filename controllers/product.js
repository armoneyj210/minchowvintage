const express = require("express");

const productApi = require("../models/product.js");

const productRouter = express.Router();

productRouter.get("/", (req, res) => {
  productApi
    .getProducts()
    .then((allProducts) => {
      res.json(allProducts);
    })
    .catch((error) => {
      console.log("Failed to retrieve all Products");
      console.log(error);
      res.send(error);
    });
});

productRouter.get("/:id", (req, res) => {
  productApi
    .getProductById(req.params.id)
    .then((singleProduct) => {
      res.json(singleProduct);
    })
    .catch((error) => {
      console.log("Failed to retrieve Product by Id");
      console.log(error);
      res.send(error);
    });
});

productRouter.post("/", (req, res) => {
  productApi
    .createProduct(req.body)
    .then((productCreated) => {
      res.json(productCreated);
    })
    .catch((error) => {
      console.log("Failed to Create Product");
      console.log(error);
      res.send(error);
    });
});

productRouter.delete(":id", (req, res) => {
  productApi
    .deleteProduct(req.params.id)
    .then(() => {
      res.send("Product was Deleted");
    })
    .catch((error) => {
      console.log("Failed to Delete Product");
      console.log(error);
      res.send(error);
    });
});

productRouter.put("/:id", (req, res) => {
  productApi
    .updateProduct(req.params.id, req.body)
    .then((updatedProduct) => {
      res.json(updatedProduct);
    })
    .catch((error) => {
      console.log("Failed to Update Product");
      console.log(error);
      res.send(error);
    });
});

module.exports = {
  productRouter,
};
