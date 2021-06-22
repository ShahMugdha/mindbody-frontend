import axios from "axios";
import request from "../../../services/request";

export const getLocationData = () => {
  return async (dispatch) => {
    await request.get('/locations/all-locations')
    .then((response) => {
      console.log(response.data, "locations data")
      dispatch({
        type: "GET_ALL__LOCATION_DATA",
        payload: response.data,
      });
    });
  };
};