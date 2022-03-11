import axios from 'axios';

let require = axios.create({
    baseURL: 'http://localhost:8099',
    withCredentials: false,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
});

function apiAxios(method, url, params) {
    require({
        method: method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? params : null,
        params: method === 'GET' || method === 'DELETE' ? params : null,
    }).then(res => {
        resolve(res);
    });
}

export default {
    get: function (url) {
        return axios(url)
    }
}