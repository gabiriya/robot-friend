import produce from "immer";
import {
 LOAD_ROBOTS_ERROR,
 LOAD_ROBOTS_PENDING,
 LOAD_ROBOTS_SUCCESS,
} from "./ActionTypes";

const initialState = {
 RobotsLoading: true,
 ListRobots: [],
};

export const RobotsReducer = (state = initialState, action) =>
 produce(state, (draft) => {
  switch (action.type) {
   case LOAD_ROBOTS_SUCCESS: {
    draft.ListRobots = action.payload;
    draft.RobotsLoading = false;
    break;
   }
   case LOAD_ROBOTS_PENDING: {
    draft.RobotsLoading = true;
    break;
   }
   case LOAD_ROBOTS_ERROR: {
    draft.RobotsLoading = false;
    draft.ListRobots = action.payload;
    break;
   }
   default:
    return state;
  }
 });
