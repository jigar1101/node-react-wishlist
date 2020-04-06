import { actions } from "../actions/product";

const getInitialState = () => {
  return {
    data: [
      {
        imgURL:
          "https://images.pexels.com/photos/1236320/pexels-photo-1236320.jpeg",
        name: "Product 1",
        price: "$10",
        isAddedToWishlist: false,
        isRemovedFromWishlist: true
      },
      {
        imgURL:
          "https://images.pexels.com/photos/1236320/pexels-photo-1236320.jpeg",
        name: "Product 2",
        price: "$20",
        isAddedToWishlist: false,
        isRemovedFromWishlist: true
      },
      {
        imgURL:
          "https://images.pexels.com/photos/1236320/pexels-photo-1236320.jpeg",
        name: "Product 3",
        price: "$40",
        isAddedToWishlist: false,
        isRemovedWishlist: true
      },
      {
        imgURL:
          "https://images.pexels.com/photos/1236320/pexels-photo-1236320.jpeg",
        name: "Product 4",
        price: "$5",
        isAddedToWishlist: true,
        isRemovedFromWishlist: false
      }
    ]
  };
};

const product = (state = getInitialState(), action) => {
  switch (action.type) {
    case actions.UPDATE_WISHLIST: {
      return {
        ...state,
        data: action.productList
      };
    }

    default:
      return state;
  }
};

export default product;
