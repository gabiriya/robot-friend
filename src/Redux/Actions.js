import axios from "axios";
import * as actions from "./ActionTypes";

export const setSearchField = (text) => ({
 type: actions.CHANGE_SEARCH_FIELD,
 payload: text,
});

export const loadRobotsList = () => async (dispatch) => {
 dispatch({
  type: actions.LOAD_ROBOTS_PENDING,
 });
 try {
  const response = await axios.get(
   "https://jsonplaceholder.typicode.com/users"
  );
  dispatch({
   type: actions.LOAD_ROBOTS_SUCCESS,
   payload: response.data,
  });
 } catch (error) {
  dispatch({
   type: actions.LOAD_ROBOTS_ERROR,
   payload: error,
  });
 }
};
