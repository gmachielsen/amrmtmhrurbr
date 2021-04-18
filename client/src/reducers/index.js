import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { sellerReducer } from "./sellerReducer";

import { searchReducer } from "./searchReducer";

const rootReducer = combineReducers({
  user: userReducer,
  seller: sellerReducer,
  search: searchReducer,
});

export default rootReducer;
