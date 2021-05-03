import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { sellerReducer } from "./sellerReducer";
import { searchReducer } from "./searchReducer";
import { cartReducer } from './cartReducer';
import { CODReducer } from "./CODReducer";

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  cart: cartReducer,
  seller: sellerReducer,
  COD: CODReducer,
});

export default rootReducer;
