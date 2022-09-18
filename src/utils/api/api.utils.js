import * as axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export const createUser = async ({ idToken }) => {
  try {
    const response = await axios.post(
      `${API_URL}api/skill-plus-plus/signup`,
      {},
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    );

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const loginUser = async ({ idToken }) => {
  try {
    const response = await axios.post(
      `${API_URL}api/skill-plus-plus/login`,
      {},
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    );

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const updateUser = async ({ idToken }) => {
  try {
    const response = await axios.post(
      `${API_URL}api/skill-plus-plus/update`,
      {},
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    );

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};
