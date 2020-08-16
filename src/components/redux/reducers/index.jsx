import { combineReducers } from "redux";

const currentBoardIDReducer = (state = [], action) => {
  switch (action.type) {
    case "CURRENT_BOARD_ID":
      return action.payload;
    default:
      return state;
  }
};

const allReducers = combineReducers({
  currentBoardIDReducer
});

export default allReducers;
