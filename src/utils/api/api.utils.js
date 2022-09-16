import * as axios from "axios";

export const createUserWithAxiosPost = async (idToken) => {
  try {
    const response =await axios.post(
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

export const sendEmailToBackend=async({sendEmail})=>{
  try{
    const response=await axios.post("http://localhost:4000/",{
      email:sendEmail,
    })
    return response.data ;
  }catch(err){
    return new Error(err.message);
  }
}
