import axios from "axios"

export const serverURL = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL
})
