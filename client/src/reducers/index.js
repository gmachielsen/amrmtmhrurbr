import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { sellerReducer } from "./sellerReducer";
import { searchReducer } from "./searchReducer";
import { cartReducer } from './cartReducer';

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  cart: cartReducer,
  seller: sellerReducer,
});

export default rootReducer;
