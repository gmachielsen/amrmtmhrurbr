import axios from "axios";

export const getTechniques = async () =>
    await axios.get(`${process.env.REACT_APP_API}/techniques`);

export const getTechnique = async (slug) => 
    await axios.get(`${process.env.REACT_APP_API}/technique/${slug}`);

export const removeTechnique = async (slug, authtoken) => 
    await axios.delete(`${process.env.REACT_APP_API}/technique/${slug}`, {
        headers: {
            authtoken,
        },
    });

export const updateTechnique = async (slug, technique, authtoken) =>
    await axios.put(`${process.env.REACT_APP_API}/technique/${slug}`, technique, {
        headers: {
            authtoken,
        },
    });

export const createTechnique = async (technique, authtoken) =>
    await axios.post(`${process.env.REACT_APP_API}/technique`, technique, {
        headers: {
            authtoken,
        },
    });