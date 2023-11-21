import axios from "axios";



export const registerRequest = (user)=> {
    return axios.post(`https://nest-cats-api-rest.onrender.com/api/v1/auth/register`, user);
};
export const loginRequest = (user)=> {
    return axios.post(`https://nest-cats-api-rest.onrender.com/api/v1/auth/login`, user);
}

export const catsRequest = (token) => {
    return axios.get(`https://nest-cats-api-rest.onrender.com/api/v1/cats`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}