import axios from "axios";
import { BASE_URL } from "./configuration";

export const getUsersInfo = async (token) => {
  return await axios.get('https://api-mixinfo.abba.uz/users/' , {
    headers: {
      token:token ?? localStorage.getItem("token"),
    },
  });
};
