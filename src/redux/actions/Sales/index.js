import axios from "axios";
import request from "../../../services/request";

export const getSaleData = () => {
  return async (dispatch) => {
    await request.post(`/`)
    .then((response) => {
      dispatch({
        type: "GET_ALL__SALE_DATA",
        payload: response.data,
      });
    });
  };
};

export const getUserToken = () => {
  return async (dispatch) => {
    await axios.post('http://localhost:5000/userToken')
    .then((res) => {
      let token = res.data.AccessToken;
      localStorage.setItem("idtoken", 'Bearer ' + token);
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      dispatch({
        type: "GET_USER_TOKEN",
        payload: res.data
      })
    })
  }
} 
