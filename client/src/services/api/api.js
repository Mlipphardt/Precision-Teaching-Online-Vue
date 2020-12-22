import axios from "axios";

const api = axios.create({
    url: VUE_APP_API_BASE,
    "Content-type": "application/json",
    timeout: 3000,
})

export default {
    api
}