import React from "react";
import axios from "axios";

const baseUrl = "http://localhost:8800/api/tickethub";


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
        const res = await axios.post(`${baseUrl}/users/login`, body)
        return res.data;
    } catch (error) {
        console.log(error)
    }
 }
