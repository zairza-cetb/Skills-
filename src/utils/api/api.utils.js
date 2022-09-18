import * as axios from "axios";

export const AuthUserPost = async (idToken) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/zairza/skill-plus-plus/signup",
      {},
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    );

    return response.data;
  } catch (err) {
    return new Error(err.message);
  }
};

export const UserDetailsPost = async (idToken, res) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/zairza/skill-plus-plus/user/updateUserDetails",
      {
        name: `${res.name}`,
        email: `${res.enterEmail}`,
        registrationNumber: `${res.enterRedgNo}`,
        wing: `${res.enterWing}`,
        branch: `${res.branch}`,
      },
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    );

    return response.data;
  } catch (err) {
    return new Error(err.message);
  }
};

export const sendEmailToBackend = async ({ idToken }) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/zairza/skill-plus-plus/user/onboardingUser",
      {},
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    return new Error(err.message);
  }
};
