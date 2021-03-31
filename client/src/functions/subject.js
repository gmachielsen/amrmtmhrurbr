import axios from "axios";

export const getSubjects = async () =>
  await axios.get(`${process.env.REACT_APP_API}/subjects`);

export const getSubject = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/subject/${slug}`);

export const removeSubject = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/subject/${slug}`, {
    headers: {
      authtoken,
    },
  });

export const updateSubject = async (slug, subject, authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/subject/${slug}`, subject, {
    headers: {
      authtoken,
    },
  });

export const createSubject = async (subject, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/subject`, subject, {
    headers: {
      authtoken,
    },
  });