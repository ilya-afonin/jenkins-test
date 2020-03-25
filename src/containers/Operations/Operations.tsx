import React, { useEffect } from 'react';
import { useHttp } from '../../hooks/http.hook';
import FormOperation from '../../components/FormOperation';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Box } from '@material-ui/core';
import { getData, saveFormData, getDetail } from '../../redux/action/operation.action';
import TableOperation from '../../components/TableOperation';
import { IPagination, IFormRequest } from '../../redux/types/operation.types';
import { IStore } from '../../redux/types/store.types';

export const Operations = () => {
  const { loading, request, error, clearError } = useHttp();
  const dispatch = useDispatch();
  const filter: IFormRequest = useSelector((state: IStore) => state.operation.formOperation);
  const dataTable: IPagination = useSelector((state: IStore) => state.operation.tableOperation);
  const transaction = useSelector((state: IStore) => state.operation.tableDetails);

  //TODO: Тестовый вызов детальной информации в консоль. Урать.
  useEffect(
    () => {
      const asyncFetch = async (): Promise<void> => {
        requestDataDetails(1050801584452534000);
      };
      asyncFetch();
    },
    []
  );
  console.log(transaction);

  const requestData = async (pageNum = 0, filter: IFormRequest | null): Promise<void> => {
    const token = await sessionStorage.getItem('session_token');
    if (token) {
      const url = `/httpbridge-server/invoke/cpsadminservice/cardTransactionService/all`;
      const pageRequest = { filter: filter, pageNum: dataTable.pageNum };
      let formData = new FormData();
      formData.append('csrfToken', token);
      formData.append('pageRequest', JSON.stringify(pageRequest));
      const data = await request(url, 'POST', formData);
      dispatch(getData(data));
    } else {
      console.error('no token');
    }
  };

  const requestDataDetails = async (transactionId: number): Promise<void> => {
    const token = await sessionStorage.getItem('session_token');
    if (token) {
      const url = `/httpbridge-server/invoke/cpsadminservice/cardTransactionService/details`;
      const transactionDetailRequest = { transactionId: transactionId };
      let formData = new FormData();
      formData.append('csrfToken', token);
      formData.append('pageRequest', JSON.stringify(transactionDetailRequest));
      const data = await request(url, 'POST', formData);
      dispatch(getDetail(data));
    } else {
      console.error('no token');
    }
  };

  const changePageHandler = (pageNum: number) => {
    requestData(pageNum, filter);
  };

  const filterData = (formData: IFormRequest) => {
    dispatch(saveFormData(formData));
    requestData(dataTable.pageNum, formData);
  };

  return (
    <Box p={1}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <FormOperation getFilteredData={filterData} />
        </Grid>
        <Grid item xs={12}>
          <TableOperation
            getPaginationData={changePageHandler}
            loading={loading}
            error={error}
            dataTable={dataTable}
          />
        </Grid>
        <Grid style={{ height: '200px' }} item xs={12}>
          <div className="Detail" />
        </Grid>
      </Grid>
    </Box>
  );
};
