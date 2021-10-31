import axios from 'axios';
const baseURL = '/api/likes';

const getAll = async () => {
    const response = await axios.get(baseURL);
    return response.data
};

const goLike = async (newObj) => {
    const response = await axios.post(baseURL, newObj);
    return response.data
};

export default { getAll, goLike }