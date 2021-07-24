import { SET_ALERT, REMOVE_ALERT } from "./type";

export default (status, action) => {
  switch (action.type) {
    case SET_ALERT:
      return action.payload;
    case REMOVE_ALERT:
      return null;
    default:
      return status;
  }
};
