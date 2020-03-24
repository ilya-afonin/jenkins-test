import { IOperationReducer } from "../types/operation.types";
import { Constants } from "../consts/operation.const";

const initialState: IOperationReducer = {
  tableOperation: {},
  formOperation: {}
};

interface IOperationAction {
  type: Constants,
  payload: any
}

export const operationReducer = (
  state: IOperationReducer = initialState,
  action: IOperationAction
) => {
  switch (action.type) {
    case Constants.GET_TABLE_PAGINATION:
      return {
        ...state,
        tableOperation: action.payload.data
      };
    case Constants.SAVE_FORM_DATA:
      return {
        ...state,
        formOperation: action.payload.formData
      }
    default:
      return state;
  }
};
