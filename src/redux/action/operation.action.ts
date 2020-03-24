import { IFormRequest } from './../types/operation.types';
import { action } from "typesafe-actions";
import { Constants } from "../consts/operation.const";

// Экшн получения данных.
export function getData(data: any) {
  return action(Constants.GET_TABLE_PAGINATION, {
    data
  });
}

export function saveFormData(formData: IFormRequest) {
  return action(Constants.SAVE_FORM_DATA, {
    formData
  })
}
