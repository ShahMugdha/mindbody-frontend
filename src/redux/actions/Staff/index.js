import axios from "axios";
import request from "../../../services/request";

export const getStaffData = () => {
  return async (dispatch) => {
    await request.get('/staff/all-staff')
    .then((response) => {
      console.log(response.data, "staff data")
      dispatch({
        type: "GET_ALL__STAFF_DATA",
        payload: response.data
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