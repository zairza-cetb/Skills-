import { UserDetailsPost } from "../utils/api/api.utils";

export const UserDetailsPostFun = async (idToken, res, auth) => {
  try {
    auth.currentUser.getIdToken(true).then(async (idToken, res) => {
      await UserDetailsPost(idToken, res);
    });
  } catch (err) {
    return new Error(err.message);
  }
};
