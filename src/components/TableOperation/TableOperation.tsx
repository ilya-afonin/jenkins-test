import React, { useState, useEffect, forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import MaterialTable, { Column } from "material-table";
import { getPaginationDataAction } from "../../redux/action/operation.action";
import { IPaginationData } from "../../redux/types/operation.types";
import { IStore } from "../../redux/types/store.types";
import { useHttp } from "../../hooks/http.hook";
import { useStyles } from "./styles";
import {
  Remove,
  FilterList,
  Check,
  AddBox,
  LastPage,
  FirstPage,
  ChevronRight,
  ChevronLeft,
  SaveAlt,
  ViewColumn,
  Search,
  Clear,
  DeleteOutline,
  ArrowUpward,
  Edit
} from "@material-ui/icons";

interface IRow {
  name: string;
  surname: string;
}

interface ITableState {
  columns: Array<Column<IPaginationData>>;
  data: IPaginationData[] | [];
}

/**
 * Компонент TableMain, основная навигация сайта.
 * @returns {JSX} TableMain и элементы навигации.
 * @prop {string} match Параметры роутинга.
 * @prop {object} value User info.
 */
export const TableOperation = () => {
  useEffect(() => {
    const asyncFetch = async (): Promise<void> => {
      const token = await sessionStorage.getItem("session_token");
      if (token) {
        getRequest(1, token);
      }
    };
    asyncFetch();
  }, []);
  console.log(useSelector((state: IStore) => state.operation.data));
  const table: ITableState = {
    data: useSelector((state: IStore) => state.operation.data),
    columns: [
      { title: "#", field: "id" },
      { title: "TXN_ID", field: "transactionId" },
      { title: "Карта", field: "pan" },
      { title: "Срок действия", field: "expdate" },
      { title: "Тип транзакции", field: "transactionType" },
      { title: "RRN", field: "rrn" },
      { title: "STAN", field: "stan" },
      { title: "Сумма траназкции", field: "amount" },
      { title: "Валюта транзакции", field: "transactionType" },
      { title: "Сист. Дата и время", field: "opDate" },
      { title: "Тран. Дата и время", field: "txnDateTime" },
      { title: "Лок. дата и время", field: "" },
      { title: "MTI", field: "mti" },
      { title: "Код института эмитента", field: "issInst" },
      { title: "Мерчант", field: "merchantId" },
      { title: "MCC", field: "mcc" },
      { title: "Страна", field: "countryCode" },
      { title: "ID терминала", field: "terminalId" },
      { title: "Тип терминала", field: "terminalType" },
      { title: "POS_DATA_CODE", field: "posDataCode" },
      { title: "Метод чтения карты", field: "panEntryMode" },
      { title: "Код авторизации", field: "authorizationCode" },
      { title: "Внутренний код ответа", field: "internalResponseCode" },
      { title: "Код ответа хоста", field: "hostResponseCode" },
      { title: "Код ответа Фрод-мониторинга", field: "fraudVerdict" }
    ]
  };
  const dispatch = useDispatch();
  const { loading, request, error, clearError } = useHttp();
  const classes = useStyles();

  const getRequest = async (pageNum: number, token: string) => {
    const url = `/httpbridge-server/invoke/cpsadminservice/cardTransactionService/all`;
    const pageNumber = { pageNum: pageNum };
    let formData = new FormData();
    formData.append("csrfToken", token);
    formData.append("pageRequest", JSON.stringify(pageNumber));
    const dataTable = await request(url, "POST", formData);
    dispatch(getPaginationDataAction(dataTable.data));
  };
  return (
    <MaterialTable
      localization={{
        pagination: {}
      }}
      options={{
        pageSize: 20,
        pageSizeOptions: [20],
        draggable: false,
        toolbar: false,
        padding: "dense",
        headerStyle: {
          fontSize: "11px",
          fontWeight: "bold",
          lineHeight: 1.2
        }
      }}
      isLoading={loading}
      style={{ marginTop: "50px" }}
      // onColumnDragged={(e, i) => console.log(e, i)}
      icons={{
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => (
          <DeleteOutline {...props} ref={ref} />
        )),
        DetailPanel: forwardRef((props, ref) => (
          <ChevronRight {...props} ref={ref} />
        )),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => (
          <FirstPage {...props} ref={ref} />
        )),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => (
          <ChevronRight {...props} ref={ref} />
        )),
        PreviousPage: forwardRef((props, ref) => (
          <ChevronLeft {...props} ref={ref} />
        )),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => (
          <ArrowUpward {...props} ref={ref} />
        )),
        ThirdStateCheck: forwardRef((props, ref) => (
          <Remove {...props} ref={ref} />
        )),
        ViewColumn: forwardRef((props, ref) => (
          <ViewColumn {...props} ref={ref} />
        ))
      }}
      columns={table.columns}
      data={table.data}
    />
  );
};
