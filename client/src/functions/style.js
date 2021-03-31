import axios from "axios";

export const getStyles = async () =>
    await axios.get(`${process.env.REACT_APP_API}/styles`);

export const getStyle = async (slug) => 
    await axios.get(`${process.env.REACT_APP_API}/style/${slug}`);

export const removeStyle = async (slug, authtoken) => 
    await axios.delete(`${process.env.REACT_APP_API}/style/${slug}`, {
        headers: {
            authtoken,
        },
    });

export const updateStyle = async (slug, style, authtoken) =>
    await axios.put(`${process.env.REACT_APP_API}/style/${slug}`, style, {
        headers: {
            authtoken,
        },
    });

export const createStyle = async (style, authtoken) =>
    await axios.post(`${process.env.REACT_APP_API}/style`, style, {
        headers: {
            authtoken,
        },
    });