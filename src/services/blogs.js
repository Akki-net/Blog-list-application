import axios from 'axios';
const baseURL = '/api/blogs';

const getAll = () => {
    const request = axios.get(baseURL);
    return request.then(response => response.data)
};

const create = (newObj) => {
    const request = axios.post(baseURL,newObj);
    return request.then(response => response.data)
};

const update = (id, newObj) => {
    const request = axios.put(`${baseURL}/${id}`,newObj);
    return request.then(response => response.data)
};

const del = (id) => {
    const request = axios.delete(`${baseURL}/${id}`);
    return request.then(response => response.data)
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, update, del };