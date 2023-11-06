import axios from "axios";

const api = "http://localhost"
export const registerRequest = axios.post(`${api}/register`, user);