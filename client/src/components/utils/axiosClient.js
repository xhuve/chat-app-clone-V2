import axios from 'axios'



const baseUrl = import.meta.env.REACT_APP_NODE_ENV == "development" ? "http://localhost:3001/" : "https://chat-app-prod-r6uf.onrender.com/"

const axiosClient = axios.create({
    baseURL: baseUrl
})

export default axiosClient;