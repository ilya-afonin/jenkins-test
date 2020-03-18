import { combineReducers } from "redux";
import { operationReducer } from "./operation.reducer";

export default combineReducers({
  operation: operationReducer
});
