const mongoose = require("./connection.js");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: String,
  description: String,
  img: String,
  cat: String,
});

const productCollection = mongoose.model("Product", ProductSchema);

const getProducts = () => {
  return productCollection.find({});
};

const getProductById = (id) => {
  return productCollection.findById(id);
};

const createProduct = (productObject) => {
  return productCollection.create(productObject);
};

const deleteProduct = (id) => {
  return productCollection.deleteOne({ _id: id });
};

const updateProduct = (id, updatedProduct) => {
  return productCollection.updateOne({ _id: id }, updatedProduct);
};
module.exports = {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
