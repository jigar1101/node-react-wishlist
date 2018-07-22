import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateWishlist } from "./actions/product";

class Wishlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: props.productList
    };

    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }

  toggleCheckbox(e) {
    const productList = [...this.state.productList];
    const newProductList = productList.map(product => {
      if (e.target.name === product.name) {
        return {
          ...product,
          isAddedToWishlist: e.target.checked
        };
      } else {
        return product;
      }
    });
    this.setState({
      productList: newProductList
    });
  }

  submitClick() {
    console.log(this.state.productList);
    this.props.dispatch(updateWishlist(this.state.productList));
    this.props.history.replace("/");
  }

  render() {
    return (
      <div className="checkbox-list">
        {this.state.productList.map(product => {
          return (
            <label key={product.name} className="checkbox">
              <input
                type="checkbox"
                className="checkbox-control"
                name={product.name}
                checked={product.isAddedToWishlist}
                onChange={this.toggleCheckbox}
              />
              <span className="checkbox-label">{product.name}</span>
            </label>
          );
        })}
        <div className="submit-button" onClick={this.submitClick.bind(this)}>
          Submit
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productList: state.product.data
  };
};

export default withRouter(connect(mapStateToProps)(Wishlist));
