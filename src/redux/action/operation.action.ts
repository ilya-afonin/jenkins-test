import { action } from "typesafe-actions";
import { Constants } from "../consts/operation.const";

// Экшн получения данных с пагинацией.
export function getPaginationDataAction(data: string) {
  return action(Constants.GET_TABLE_PAGINATION, {
    data
  });
}
