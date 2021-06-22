import axios from "axios";
import request from "../../../services/request";

export const getSaleData = () => {
  return async (dispatch) => {
    await request.get('/sales/all-sales')
    .then((response) => {
      console.log(response.data, "sales data")
      dispatch({
        type: "GET_ALL__SALE_DATA",
        payload: response.data.result,
      });
    });
  };
};

export const getUserToken = () => {
  return async (dispatch) => {
    await axios.get('http://localhost:5000/userToken')
    .then((res) => {
      console.log(res.data)
      let token = res.data;
      localStorage.setItem("idtoken", 'Bearer ' + token);
      dispatch({
        type: "GET_USER_TOKEN",
        payload: res.data
      })
    })
  }
} 
