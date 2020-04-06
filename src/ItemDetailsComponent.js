import React from "react";

export default class ItemDetailsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: props.productList
    };
  }

  addListClick() {
    this.props.addListClick(this.state.productList);
  }

  removeListClick(){
    this.props.removeListClick(this.state.productList);
  }

  showAlert() {
    alert("You have already added this product to the wishlist");
  }

  showRemoveAlert() {
    alert("This product is not in wishlist");
  }

  render() {
    return (
      <div className="product-list">
        {this.state.productList.map(product => {
          return (
            <div key={product.name} className="product-item-container">
              <div className="product-item">
                <div>
                  <img src={product.imgURL} alt={product.name} />
                </div>
                <div>
                  <div>
                    <span>{product.name}</span>
                  </div>
                  <div className="details-wrapper">
                    <span>{product.price}</span>
                  </div>
                  <div
                    className="apply-button"
                    onClick={
                      !product.isAddedToWishlist
                        ? this.addListClick.bind(this)
                        : this.showAlert.bind(this)
                    }
                  >
                    {product.isAddedToWishlist
                      ? "Added to Wishlist"
                      : "Add to Wishlist"}
                  </div>
                  <div
                    className="apply-button"
                    onClick={
                      product.isAddedToWishlist
                        ? this.removeListClick.bind(this)
                        : this.showRemoveAlert.bind(this)
                    }
                  >
                    {product.isAddedToWishlist
                      ? "Remove from Wishlist"
                      : "Not in Wishlist"}
                  </div>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}
