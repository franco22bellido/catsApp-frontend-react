import axios from "axios";

export const saveCat = (values, token)=> {
    return axios.post('https://nest-cats-api-rest.onrender.com/api/v1/cats', values, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
export const deleteCat = (id, token)=> {
    return axios.delete(`https://nest-cats-api-rest.onrender.com/api/v1/cats/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
export const getOneCat = (catId, token)=> {
    return axios.get(`https://nest-cats-api-rest.onrender.com/api/v1/cats/${catId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const updateCat = (id, values, token)=> {
    return axios.patch(`https://nest-cats-api-rest.onrender.com/api/v1/cats/${id}`,values , {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}