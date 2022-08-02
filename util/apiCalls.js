import axios from "axios"

// const  BASE_URL = "http://localhost:3000/api/";
const BASE_URL = "https://virtus-baronissi.vercel.app/api/"

export const axiosReq = axios.create({
    baseURL:  BASE_URL
})