import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  FETCH_PRODUCTS_BY_USER,
} from "../constants/actionTypes";
import Product from "../constants/product";
const productsReducer = (products: Product[] = [], action: any) => {
  const pL = action?.payload;
  switch (action.type) {
    case FETCH_PRODUCTS_BY_USER:
      return [...pL];
    case CREATE_PRODUCT:
      return [...products, pL];
    case UPDATE_PRODUCT:
      return products.map((product: Product) =>
        product?._id === pL?._id ? pL : product
      );
    case DELETE_PRODUCT:
      return products.filter((product: Product) => product?._id !== pL?._id);
    default:
      return products;
  }
};

export default productsReducer;
