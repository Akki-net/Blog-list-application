import axios from 'axios';
const baseURL =  '/api/login';

const login = async credentials => {
    const response = await axios.post(baseURL, credentials);
    return response.data
}

const getLike = async id => {
    const response = await axios.get(`${baseURL}/${id}`);
    return response.data
}

const goLike = async (id,credentials) => {
    const response = await axios.put(`${baseURL}/${id}`, credentials);
    return response.data
}

export default { login, goLike, getLike}

