import { IOperationReducer } from '../types/operation.types';
import { Constants } from '../consts/operation.const';

const initialState: IOperationReducer = {
  tableOperation: {},
  formOperation: {
    dateFrom: new Date().setHours(0, 0, 0, 0),
    timeFrom: '00:00:00',
    dateEnd: new Date().setHours(0, 0, 0, 0),
    timeEnd: '23:59:59',
  },
  tableDetails: {},
};

interface IOperationAction {
  type: Constants,
  payload: any,
}

export const operationReducer = (
  state: IOperationReducer = initialState,
  action: IOperationAction
) => {
  switch (action.type) {
    case Constants.GET_TABLE_PAGINATION:
      return {
        ...state,
        tableOperation: action.payload.data,
      };
    case Constants.SAVE_FORM_DATA:
      return {
        ...state,
        formOperation: action.payload.formData,
      };
    case Constants.GET_TABLE_DETAILS:
      return {
        ...state,
        tableDetails: action.payload.data,
      };
    default:
      return state;
  }
};
