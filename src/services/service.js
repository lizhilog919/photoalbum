import axios from 'axios'

let http = {
    post:"",
    get:""
};

http.post = function (api, params) {
    return new Promise((resolve, reject) => {
        axios.post(api, params).then((res) => {
            resolve(res);
        })
    })
};

http.get = function (api, params) {
    return new Promise((resolve, reject) => {
        axios.get(api, {params:params}).then((res) => {
            resolve(res);
        })
    })
};

export default http
