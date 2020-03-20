import { IOperationReducer } from "../types/operation.types";
import { Constants } from "../consts/operation.const";

const initialState: IOperationReducer = {
  tableOperation: {}
};

export const operationReducer = (
  state: IOperationReducer = initialState,
  action: any
) => {
  switch (action.type) {
    case Constants.GET_TABLE_PAGINATION:
      return {
        ...state,
        tableOperation: action.payload.data
      };
    default:
      return state;
  }
};
