import React from "react";
import { connect } from "react-redux";
import ItemDetailsComponent from "./ItemDetailsComponent";
import { withRouter } from "react-router-dom";

class Home extends React.Component {

  renderItemDetails() {
    return (
      <ItemDetailsComponent
        productList={this.props.productList}
        addListClick={this.addListClick.bind(this)}
        removeListClick={this.removeListClick.bind(this)}
      />
    );
  }

  addListClick() {
    this.props.history.push("/wishlist");
  }

  removeListClick(){
    this.props.history.push("/wishlist");
  }

  render() {
    const itemDetails = this.renderItemDetails();

    return (
      <div className="container">
        <hr />
        {itemDetails}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productList: state.product.data
  };
};

export default withRouter(connect(mapStateToProps)(Home));
