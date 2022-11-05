import * as axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export const createUser = async ({ idToken }) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/skill-plus-plus/signup`,
      {},
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    );

    return response.data.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const loginUser = async ({ idToken }) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/skill-plus-plus/login`,
      {},
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    );
    return response.data.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const updateUser = async ({ user, idToken }) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/skill-plus-plus/user/onboardingUser`,
      user,
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    );

    return response.data.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const fetchRegisteredDomainSkillUser = async ({ idToken }) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/skill-plus-plus/domainReg/getRegisteredDomain`,
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    );
    return response.data.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const submitUserAssignment = async ({ idToken, submitAssignment }) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/skill-plus-plus/user/student/submit`,
      submitAssignment,
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    );
    return response.data.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const submitMentorReview = async ({ idToken, review }) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/skill-plus-plus/user/mentor/submit`,
      review,
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    );
    return response.data.data;
  } catch (err) {
    throw new Error(err.message);
  }
};


export const fetchMentorDashboardService = async ({ idToken , domainId }) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/skill-plus-plus/user/mentor/dashboard`,
      {
        params: {
          domainId,
        },
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    );
    return response.data.data;
  } catch (err) {
    throw new Error(err.message);
  }
};


export const submitMentorReviewService = async ({ idToken, review }) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/skill-plus-plus/user/mentor/submit`,
      review,
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    );
    return response.data.message;
  } catch (err) {
    throw new Error(err.message);
  }
}