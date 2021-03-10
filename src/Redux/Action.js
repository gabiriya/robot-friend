import {
 LOAD_ROBOTS_PENDING,
 LOAD_ROBOTS_SUCCESS,
 LOAD_ROBOTS_ERROR,
} from "./ActionTypes";
import axios from "axios";

export const LoadRobots = () => (dispatch) => {
 dispatch({
  type: LOAD_ROBOTS_PENDING,
 });
 axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
   dispatch({
    type: LOAD_ROBOTS_SUCCESS,
    payload: response.data,
   });
  })
  .catch((error) => {
   dispatch({
    type: LOAD_ROBOTS_ERROR,
    payload: error,
   });
  });
};
