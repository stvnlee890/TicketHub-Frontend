import React from "react";
import axios from "axios";

const baseUrl = "http://localhost:8800/api/tickethub";

export const UserSignup = async (body) => {
  try {
    const res = await axios.post(`${baseUrl}/users/signup`, body);
    return res.data;
  } catch (error) {
    console.log("SIGNUP:", error);
  }
};
