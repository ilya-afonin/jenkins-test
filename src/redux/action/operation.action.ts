import { IFormState, IPagination, IDetailData } from './../types/operation.types';
import { action } from 'typesafe-actions';
import { Constants } from '../consts/operation.const';

// Экшн получения данных.
export function getData(data: IPagination) {
  return action(Constants.GET_TABLE_PAGINATION, {
    data,
  });
}

export function saveFormData(formData: IFormState) {
  return action(Constants.SAVE_FORM_DATA, {
    formData,
  });
}

export function getDetail(data: IDetailData) {
  return action(Constants.GET_TABLE_DETAILS, {
    data,
  });
}
