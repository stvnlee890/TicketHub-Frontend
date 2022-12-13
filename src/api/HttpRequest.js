import axios from "axios";

const baseUrl = "http://localhost:8800/api/tickethub";

// ===================
// USER LOGIN
// ===================
// USER SIGN UP REQUEST
export const UserSignup = async (body) => {
  try {
    const res = await axios.post(`${baseUrl}/users/signup`, body);
    return res.data;
  } catch (error) {
    console.log("SIGNUP:", error);
  }
};

// USER LOGIN REQUEST
export const UserLogin = async (body) => {
  try {
    const res = await axios.post(`${baseUrl}/users/login`, body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// ===================
// CONCERTS
// ===================

export const GetConcerts = async() => {
  try {
    const res = await axios.get(`${baseUrl}/concerts`);
    return res.data;
  } catch (error) {
    console.log(error)
  }
};
