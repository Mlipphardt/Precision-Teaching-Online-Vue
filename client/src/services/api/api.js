import axios from "axios";

export default axios.create({
  url: process.env.VUE_APP_API_BASE,
  "Content-type": "application/json",
  timeout: 3000,
});
