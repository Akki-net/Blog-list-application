import axios from 'axios';
const baseURL = '/api/blogs';
let token = null;

const setToken = newToken => {
    token = `bearer ${newToken}`
};

const getAll = () => {
    const request = axios.get(baseURL);
    return request.then(response => response.data)
};

const create = async newObj => {
    const config = {
        headers: {Authorization: token}
    };
    const response = await axios.post(baseURL,newObj,config);
    return response.data
};

const update = (id, newObj) => {
    const request = axios.put(`${baseURL}/${id}`,newObj);
    return request.then(response => response.data)
};

const del = async id => {
    const config = {
        headers: {Authorization: token}
    };
    const response = await axios.delete(`${baseURL}/${id}`,config);
    return response.data
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, update, del, setToken };