import React, { useState, useEffect, forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import MaterialTable, { Column } from "material-table";
import { TablePagination } from "@material-ui/core";
import { getPaginationDataAction } from "../../redux/action/operation.action";
import { IOperationReducer } from "../../redux/types/operation.types";
import { IStore } from "../../redux/types/store.types";
import { useHttp } from "../../hooks/http.hook";
import { headerConfig } from "./config";
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

interface ITableState {
  columns: Array<Column<IOperationReducer>>;
  tableOperation: IOperationReducer[] | any;
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
        getRequest(0, token);
      }
    };
    asyncFetch();
  }, []);

  const table: ITableState = {
    tableOperation: useSelector(
      (state: IStore) => state.operation.tableOperation
    ),
    columns: headerConfig
  };
  const [countPage, setCountPage] = useState(0);
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
    dispatch(getPaginationDataAction(dataTable));
  };

  const handleChangePage = (page: number) => {
    setCountPage(page);
    const token = sessionStorage.getItem("session_token");
    if (token) {
      getRequest(page, token);
    }
  };

  const renderDataTable = (data: any) => {
    return data.map((item: any, i: any) => {
      return {
        ...item,
        id: i + 1
      };
    });
  };

  return (
    <MaterialTable
      components={{
        Pagination: props => (
          <TablePagination
            {...props}
            // rowsPerPageOptions={[20]}
            rowsPerPage={20}
            count={
              Object.keys(table.tableOperation).length !== 0
                ? table.tableOperation.totalTxs
                : 1
            }
            page={countPage}
            onChangePage={(e: any, page: number) => handleChangePage(page)}
          />
        )
      }}
      localization={{
        pagination: {}
      }}
      options={{
        maxBodyHeight: "400px",
        pageSize: 20,
        pageSizeOptions: [20],
        draggable: false,
        toolbar: false,
        padding: "dense",
        headerStyle: {
          fontSize: "12px",
          fontWeight: "bold",
          lineHeight: 1.2
        }
      }}
      isLoading={loading}
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
      data={renderDataTable(
        table.tableOperation.data === undefined ? [] : table.tableOperation.data
      )}
    />
  );
};
