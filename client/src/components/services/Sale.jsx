import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Sale extends Component {
  state = {
    product: [],
    newProduct: {
      name: "",
      price: "",
      description: "",
      img: "",
      cat: "",
    },
    productForm: false,
  };
  updatePage = () => {
    axios.get("/api/product").then((res) => {
      this.setState({ product: res.data });
      console.log(this.state.product);
    });
  };
  componentDidMount() {
    this.updatePage();
  }
  handleToggleNewForm = () => {
    this.setState((state) => {
      return { productForm: !state.productForm };
    });
  };
  handleNewFormChange = (evt) => {
    const newProduct = { ...this.state.newProduct };
    newProduct[evt.target.name] = evt.target.value;
    this.setState({ newProduct });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    axios.post("/api/product", this.state.newProduct).then(() => {
      this.setState({
        productForm: false,
        newProduct: {
          name: "",
          price: "",
          description: "",
          img: "",
          cat: "",
        },
      });
      this.updatePage();
    });
  };
  render() {
    let products = this.state.product.map((product) => {
      return (
        <div className="product-header">
          <div className="product-item">
            <div className="product-list">
              <h2>
                {" "}
                <u> {product.name}</u>
              </h2>
            </div>

            <img className="product-img" src={product.img} alt={product.name} />

            <div className="product-list">
              <h3>{product.price}</h3>
              <h3>{product.description}</h3>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h1 className="product-header">Products</h1>
        <div className="product-button">
          <button onClick={this.handleToggleNewForm}>Add New Product</button>
        </div>
        <br />
        {this.state.productForm ? (
          <form onSubmit={this.handleSubmit}>
            <div className="product-header">
              <label htmlFor="product-name">Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.newProduct.name}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <div className="product-header">
              <label htmlFor="product-price">Price:</label>
              <input
                type="text"
                name="price"
                value={this.state.newProduct.price}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <div className="product-header">
              <label htmlFor="product-description">Description:</label>
              <input
                type="text"
                name="description"
                value={this.state.newProduct.description}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <div className="product-header">
              <label htmlFor="product-image">Image:</label>
              <input
                type="text"
                name="img"
                value={this.state.newProduct.img}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <div className="product-header">
              <label htmlFor="product-cat">Category:</label>
              <input
                type="text"
                name="cat"
                value={this.state.newProduct.cat}
                onChange={this.handleNewFormChange}
              />
            </div>
            <input
              className="add-submit"
              type="submit"
              value="Create Product"
            />
          </form>
        ) : (
          products
        )}
      </div>
    );
  }
}
