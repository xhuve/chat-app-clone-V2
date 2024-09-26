import axios from 'axios'

const baseUrl = import.meta.env.REACT_APP_NODE_ENV === "development" ? "http://localhost:3001/" : import.meta.env.WEB_URL

const axiosClient = axios.create({
    baseURL: baseUrl
})

export default axiosClient;