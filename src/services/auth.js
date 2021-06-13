import { apiHelper } from "./api"

const REGISTER_URL = `http://localhost:3000/login`;

export const loginUser = async (data) => {
  return new Promise((resolve) => {
    const { Username, Password } = data;
    apiHelper('/userToken', 'post', data)
    .then((loginData) => {
        return resolve(loginData);
    }).catch((err) => {
        return resolve(err)
    })
  });
}

