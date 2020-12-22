import axios from "axios";

const baseRoute = process.env.VUE_APP_API_BASE;

export default axios.create({
  baseURL: baseRoute,
  //   "Content-type": "application/json",
  //   timeout: 3000,
  //   crossDomain: true,
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //   },
});
