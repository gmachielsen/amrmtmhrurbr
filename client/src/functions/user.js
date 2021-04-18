import axios from "axios";

export const getWishlist = async (authtoken) => 
    await axios.get(`${process.env.REACT_APP_API}/user/wishlist`, {
        headers: {
            authtoken,
        },
    });

export const removeWishlist = async (productId, authtoken) =>
    await axios.put(`${process.env.REACT_APP_API}/user/wishlist/${productId}`, {}, {
        headers: {
            authtoken,
        },
    });

export const addToWishlist = async (productId, authtoken) =>
    await axios.post(`${process.env.REACT_APP_API}/user/wishlist`, { productId }, {
        headers: {
            authtoken,
        },
    });