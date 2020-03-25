import React, { useState, forwardRef } from 'react';
import { format } from 'date-fns';
import MaterialTable, { Column } from 'material-table';
import { TablePagination } from '@material-ui/core';
import { IOperationReducer, IFormState } from '../../redux/types/operation.types';
import { IStore } from '../../redux/types/store.types';
import { headerConfig } from './config';
import { useStyles } from './styles';
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
  Edit,
} from '@material-ui/icons';

interface ITableState {
  columns: Array<Column<IOperationReducer>>,
  tableOperation: IOperationReducer[] | any,
}

interface ITableOperation {
  getPaginationData: (page: number) => void,
  loading: boolean,
  error: object | null,
  dataTable: IStore | {},
}

/**
 * Компонент TableMain, основная навигация сайта.
 * @returns {JSX} TableMain и элементы навигации.
 * @prop {string} match Параметры роутинга.
 * @prop {object} value User info.
 */
export const TableOperation = (
  { getPaginationData, loading, error, dataTable }: ITableOperation
): JSX.Element => {
  const table: ITableState = {
    tableOperation: dataTable,
    columns: headerConfig,
  };

  const [countPage, setCountPage] = useState(0);
  const classes = useStyles();
  const renderDataTable = (data: any) => {
    return data.map((item: any, i: any) => {
      return {
        ...item,
        id: i + 1,
        opDate: format(+item.opDate, 'dd.MM.yyyy hh:mm:ss'),
        txnDateTime: format(+item.txnDateTime, 'dd.MM.yyyy hh:mm:ss'),
        localDateTime: format(+item.localDateTime, 'dd.MM.yyyy hh:mm:ss'),
      };
    });
  };

  return (
    <MaterialTable
      components={{
        Pagination: props => (
          <TablePagination
            {...props}
            className={classes.pagination}
            rowsPerPage={20}
            count={
              Object.keys(table.tableOperation).length !== 0 ? table.tableOperation.totalTxs : 1
            }
            page={countPage}
            onChangePage={(e: any, page: number) => {
              setCountPage(page);
              return getPaginationData(page);
            }}
          />
        ),
      }}
      localization={{
        pagination: {
          firstTooltip: 'Первая страница',
          previousTooltip: 'Предыдущая страница',
          nextTooltip: 'Слудующая страница',
          lastTooltip: 'Последняя страница',
          labelDisplayedRows: '{from}-{to} из {count}',
        },
      }}
      options={{
        showEmptyDataSourceMessage: false,
        maxBodyHeight: '350px',
        pageSize: 20,
        pageSizeOptions: [20],
        draggable: true,
        toolbar: false,
        padding: 'dense',
        paginationType: 'stepped',
        headerStyle: {
          fontSize: '10px',
          fontWeight: 'bold',
          lineHeight: 1.2,
        },
        rowStyle: {
          whiteSpace: 'nowrap',
        },
      }}
      isLoading={loading}
      // onColumnDragged={(e, i) => console.log(e, i)}
      icons={{
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
      }}
      columns={table.columns}
      data={renderDataTable(
        table.tableOperation.data === undefined ? [] : table.tableOperation.data
      )}
    />
  );
};
