import axios from 'axios';


// api calling function
export const apiHelper = (api, methodData, requestData) => {
    const url = `http://localhost:5000`;

    const apiUrl = url + api;
    const UserToken = sessionStorage.getItem('idtoken');
    let header = null;
    if (UserToken) {
        header = {
            idtoken: UserToken
        }
    }

    return new Promise((resolve, reject) => {
        axios({
            method: methodData,
            url: apiUrl,
            data: requestData,
            headers: header
        }).then((res) => {
            return resolve(res)
        }).catch((error) => {
            return reject(error)
        });
    });

}

export const apiHelperWithHeader = (api, methodData, requestData, header) => {
    const url = `http://${localStorage.getItem('user')}.localhost:5000/`;
    const apiUrl = url + api;
    console.log(apiUrl);
    return new Promise((resolve, reject) => {
        axios({
            method: methodData,
            url: apiUrl,
            data: requestData,
            headers: header
        }).then((res) => {
            return resolve(res)
        }).catch((error) => {
            return reject(error)
        });
    });

}
