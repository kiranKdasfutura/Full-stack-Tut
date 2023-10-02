import axios from 'axios'
const BASE_URL="http://localhost:7000/api/";
export const publicRequiest=axios.create({
    baseURL:BASE_URL
})
