import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { sellerReducer } from "./sellerReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    seller: sellerReducer
});

export default rootReducer;