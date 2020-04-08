import React, { useState, forwardRef, useEffect } from 'react';
import MaterialTable, { Column } from 'material-table';
import { TablePagination } from '@material-ui/core';
import { IPagination } from '../../redux/types/operation.types';
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

/**
 * Компонент TableOperation, таблица с пагинацией.
 * @returns {JSX} TableOperation.
 * @prop {(number)=> void} getPaginationData кэлбэк функция, возвращает номер страницы.
 * @prop {boolean} loading загрузка таблицы с сервера.
 * @prop {object | null} error ошибка с сервера.
 * @prop {Array} dataTable Данные для отрисовки и пагинации таблицыы.
 * @prop {void} onRowClick Кэлбэк функция при клике на строку, возвращает данные строки.
 */
interface ITableOperation {
  getPaginationData: (page: number) => void,
  loading?: boolean,
  error?: object | null,
  dataTable: IPagination,
  onRowClick: any,
}

export const TableOperation = (
  { getPaginationData, loading, error, dataTable, onRowClick }: ITableOperation
): JSX.Element => {

  const [countPage, setCountPage] = useState(0);
  const classes = useStyles();

  useEffect(
    () => {
      if (dataTable.pageNum !== undefined) {
        if (dataTable.pageNum === 0) {
          setCountPage(0);
        } else {
          setCountPage(dataTable.pageNum);
        }
      }
    },
    [dataTable]
  );

  // Преобразуем дату и время к нормальному виду.
  const toolsDate = (date: number): string => {
    const enrichZeroDate = date.toString().length < 10 ? `0${date}` : `${date}`;
    const month = enrichZeroDate.slice(0, 2);
    const day = enrichZeroDate.slice(2, 4);
    const hour = enrichZeroDate.slice(4, 6);
    const minute = enrichZeroDate.slice(6, 8);
    const second = enrichZeroDate.slice(8, 10);
    return `${day}.${month} ${hour}:${minute}:${second}`;
  }

  // Преобразуем системные дату и время к нормальному виду.
  const toolsDateSystem = (date: number): string => {
    const year = date.toString().slice(0, 4);
    const month = date.toString().slice(4, 6);
    const day = date.toString().slice(6, 8);
    const hour = date.toString().slice(8, 10);
    const minute = date.toString().slice(10, 12);
    const second = date.toString().slice(12, 14);
    return `${day}.${month}.${year} ${hour}:${minute}:${second}`;
  }

  const mccMatchNumber = (mcc: number) => {
    const length = mcc.toString().length;
    switch (length) {
      case 1: return `000${mcc}`
      case 2: return `00${mcc}`
      case 3: return `0${mcc}`
      case 4: return `${mcc}`
      default:
        break;
    }
  }

  // Формирование суммы транзакции.
  const matchAmountTransaction = (amount: number): number | string => {
    const divisionAmount: number = amount / 100;
    if (Number.isInteger(divisionAmount)) {
      return divisionAmount.toFixed(2);
    } else { return divisionAmount }
  }

  // Формируем правильное отображение срока действия карты 00/00.
  const conversionExpdate = (expdate: number): string => {
    const year: string = expdate.toString().slice(0, 2);
    const month: string = expdate.toString().slice(2, 4);
    return `${year}/${month}`;
  }


  // Формирование данных для таблицы.
  const renderDataTable = (data: any) => {
    return data.map((item: any, i: number) => {
      return {
        ...item,
        id: i + 1,
        expdate: conversionExpdate(item.expdate),
        amount: matchAmountTransaction(item.amount),
        mcc: mccMatchNumber(+item.mcc),
        opDate: toolsDateSystem(+item.opDate),
        txnDateTime: toolsDate(+item.txnDateTime),
        localDateTime: toolsDate(+item.localDateTime),
        hostResponseCodeStatus: checkHostResponseCode(item.hostResponseCode)
      };
    });
  };

  // Преобразование колонок таблицы.
  const renderColumns = (column: Array<Column<any>>) => {
    return column.map((item) => {
      if (item.field === 'hostResponseCodeStatus') {
        return {
          ...item,
          cellStyle: (cellData: any, rowData: any) => {
            if (rowData.hostResponseCodeStatus === 'OK') {
              return { backgroundColor: 'rgba(0, 255, 98, .3)' };
            } else { return { backgroundColor: 'rgba(255, 0, 0, .3)' } };
          }
        }
      } else { return { ...item } }
    })
  }

  //Проверка статуса ответа хоста.
  const checkHostResponseCode = (resCode: any) => {
    const hostResCode = `${resCode}`;
    const result = (hostResCode === '0' ||
      hostResCode === '10' ||
      hostResCode === '87') ? 'OK' : 'FAIL';
    return result;
  }

  return (
    <MaterialTable
      onRowClick={onRowClick}
      components={{
        Pagination: props => (
          <TablePagination
            {...props}
            className={classes.pagination}
            rowsPerPage={20}
            count={
              error === null && dataTable.totalTxs !== undefined ? dataTable.totalTxs : 1
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
        doubleHorizontalScroll: false,
        emptyRowsWhenPaging: false,
        showEmptyDataSourceMessage: false,
        maxBodyHeight: 350,
        minBodyHeight: 350,
        pageSize: 20,
        pageSizeOptions: [20],
        draggable: true,
        toolbar: false,
        padding: 'dense',
        paginationType: 'normal',
        headerStyle: {
          fontSize: '10px',
          fontWeight: 'bold',
          lineHeight: 1.2,
        },
        rowStyle: (rowData, index) => {
          return index % 2 === 0 ? { whiteSpace: 'nowrap' } :
            {
              backgroundColor: '#f5f5f5',
              whiteSpace: 'nowrap',
            }
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
      columns={renderColumns(headerConfig)}
      data={renderDataTable(
        dataTable.data === undefined ? [] : dataTable.data
      )}
    />
  );
};
