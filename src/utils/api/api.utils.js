import * as axios from "axios";

export const createUserWithAxiosPost = async ({user,idToken}) => {
  try {
    const response =await axios.post(
      "http://localhost:4000/api/zairza/skill-plus-plus/signup",
      {user},
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

export const sendEmailToBackend=async({sendEmail,idToken})=>{
  try{
    const response=await axios.post("http://localhost:4000/api/zairza/skill-plus-plus/user/onboardingUser",{email:sendEmail}
    ,{
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    })
    return response.data ;
  }catch(err){
    return new Error(err.message);
  }
}
