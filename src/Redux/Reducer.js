import * as actions from "../Redux/ActionTypes";
import { produce } from "immer";

const initialState = {
 searchField: "",
 loadingRobots: false,
 RobotsList: [],
};

// export const rootReducer = (state = initialState, action = {}) => {
//  switch (action.type) {
//   case actions.CHANGE_SEARCH_FIELD:
//    return { ...state, searchField: action.payload };
//   case actions.LOAD_ROBOTS_PENDING:
//    return { ...state, robotsLoading: true };
//   case actions.LOAD_ROBOTS_SUCCESS:
//    return { ...state, robotsLoading: false, RobotsList: action.payload };
//   case actions.LOAD_ROBOTS_ERROR:
//    return { ...state, RobotsList: action.payload };
//   default:
//    return state;
//  }
// };

export const SearchRobots = (state = initialState, action = {}) => {
 switch (action.type) {
  case actions.CHANGE_SEARCH_FIELD:
   return { ...state, searchField: action.payload };
  default:
   return state;
 }
};

export const robotsReducer = (state = initialState, action) =>
 produce(state, (draft) => {
  switch (action.type) {
   case actions.LOAD_ROBOTS_PENDING:
    draft.loadingRobots = true;
    break;
   case actions.LOAD_ROBOTS_SUCCESS:
    draft.loadingRobots = false;
    draft.RobotsList = action.payload;
    break;
   case actions.LOAD_ROBOTS_ERROR:
    draft.loadingRobots = false;
    draft.error = action.payload;
    break;
   default: {
    break;
   }
  }
 });
