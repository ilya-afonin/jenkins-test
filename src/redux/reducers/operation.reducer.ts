import { IPagination } from "../types/operation.types";
import { Constants } from "../consts/operation.const";

const initialState: IPagination = {
  data: []
};

export const operationReducer = (
  state: IPagination = initialState,
  action: any
) => {
  switch (action.type) {
    case Constants.GET_TABLE_PAGINATION:
      return {
        ...state,
        data: action.payload.data
      };
    default:
      return state;
  }
};
