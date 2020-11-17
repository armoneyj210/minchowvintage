import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class SingleSale extends Component {
  state = {
    products: {
      name: "",
      price: "",
      description: "",
      img: "",
      cat: "",
    },
    editForm: false,
    returnHome: false,
  };
  updatePage = () => {
    axios
      .get(`/api/product/${this.props.match.params.productId}`)
      .then((res) => {
        this.setState({ products: res.data });
      });
  };
  componentDidMount() {
    this.updatePage();
  }
  editFormChange = (evt) => {
    const newProduct = { ...this.state.products };
    newProduct[evt.target.name] = evt.target.value;
    this.setState({ products: newProduct });
  };
  toggleEditForm = () => {
    this.setState((state) => {
      return { editForm: !state.editForm };
    });
  };
  submitButtonAction = (evt) => {
    evt.preventDefault();
    axios
      .put(
        `/api/product/${this.props.match.params.productId}`,
        this.state.products
      )
      .then((res) => {
        this.setState({ products: res.data, editForm: false });
        this.updatePage();
      });
  };
  deleteButtonAction = () => {
    axios
      .delete(`/api/product/${this.props.match.params.productId}`)
      .then(() => {
        this.setState({ returnHome: true });
      });
  };
  render() {
    return (
      <div>
        {this.state.returnHome === true ? <Redirect to="/sale" /> : null}
        <div className="product-header">
          <h1>{this.state.products.name}</h1>
        </div>
        {this.state.editForm ? (
          <form onSubmit={this.submitButtonAction}>
            <br />
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.products.name}
                onChange={this.editFormChange}
              />
            </div>
            <br />
            <div>
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                name="description"
                value={this.state.products.description}
                onChange={this.editFormChange}
              />
            </div>
            <br />
            <div>
              <label htmlFor="img">Image:</label>
              <input
                type="text"
                name="img"
                value={this.state.products.img}
                onChange={this.editFormChange}
              />
            </div>
            <br />
            <input className="add-submit" type="submit" value="Save Product" />
          </form>
        ) : (
          <div>
            <h1 className="product-header">{this.state.products.name}</h1>

            <img
              className="product-header"
              src={this.state.products.img}
              alt="product"
            />

            <p className="product-desc">{this.state.products.description}</p>
          </div>
        )}
        <div>
          <button onClick={this.toggleEditForm}>Edit Product</button>
          <button onClick={this.deleteButtonAction}>Delete Product</button>
        </div>
      </div>
    );
  }
}
