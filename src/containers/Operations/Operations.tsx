import React from 'react';
import { useHttp } from '../../hooks/http.hook';
import FormOperation from '../../components/FormOperation';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Box } from '@material-ui/core';
import { getData, saveFormData, getDetail } from '../../redux/action/operation.action';
import TableOperation from '../../components/TableOperation';
import DetailOperation from '../../components/DetailOperation';
import {
  IPagination,
  IFormRequest,
  IPaginationData,
  IDetailData,
} from '../../redux/types/operation.types';
import { IStore } from '../../redux/types/store.types';

export const Operations: React.FC = (): JSX.Element => {
  const { loading, request, error, clearError } = useHttp();
  const dispatch = useDispatch();
  const filter: IFormRequest = useSelector((state: IStore) => state.operation.formOperation);
  const dataTable: IPagination = useSelector((state: IStore) => state.operation.tableOperation);
  // TODO: tableDetails сюда кладется информация о строке на которую кликнули.
  const tableDetails: IDetailData = useSelector((state: IStore) => state.operation.tableDetails);

  const requestData = async (pageNum = 0, filter: IFormRequest | null): Promise<void> => {
    const token = await sessionStorage.getItem('session_token');
    if (token) {
      const url = `/httpbridge-server/invoke/cpsadminservice/cardTransactionService/all`;
      const pageRequest = { filter: filter, pageNum: pageNum };
      let formData = new FormData();
      formData.append('csrfToken', token);
      formData.append('pageRequest', JSON.stringify(pageRequest));
      const data = await request(url, 'POST', formData);
      dispatch(getData(data));
    } else {
      console.error('no token');
    }
  };

  const requestDataDetails = async (transactionId: number): Promise<IPagination | void> => {
    const token = await sessionStorage.getItem('session_token');
    if (token) {
      const url = `/httpbridge-server/invoke/cpsadminservice/cardTransactionService/details`;
      const transactionDetailRequest = { transactionId: transactionId };
      let formData = new FormData();
      formData.append('csrfToken', token);
      formData.append('transactionDetailRequest', JSON.stringify(transactionDetailRequest));
      const data = await request(url, 'POST', formData);
      return data;
    } else {
      console.error('no token');
    }
  };

  const changePageHandler = (pageNum: number): void => {
    requestData(pageNum, filter);
  };

  const filterData = (formData: IFormRequest) => {
    dispatch(saveFormData(formData));
    requestData(0, formData);
  };

  const onRowClick = async (event: Event, row: IPaginationData): Promise<void> => {
    const data: any = await requestDataDetails(+row.transactionId);
    const uniteData: IDetailData = {
      ...data,
      ...row,
    };
    dispatch(getDetail(uniteData));
  };

  return (
    <Box p={1}>
      <Grid container direction="column" spacing={1}>
        <Grid item xs={12}>
          <FormOperation getFilteredData={filterData} />
        </Grid>
        <Grid item xs={12}>
          <TableOperation
            getPaginationData={changePageHandler}
            loading={loading}
            error={error}
            dataTable={dataTable}
            onRowClick={onRowClick}
          />
        </Grid>
        <Grid item xs={12}>
          <DetailOperation dataDetail={tableDetails} />
        </Grid>
      </Grid>
    </Box>
  );
};
