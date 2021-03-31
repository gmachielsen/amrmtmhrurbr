export const sellerReducer = (state = null, action) => {
    switch(action.type) {
        case "LOGGED_IN_SELLER":
            return action.payload;
        case "LOGOUT":
            return action.payload;
        default:
            return state;
    }
};
