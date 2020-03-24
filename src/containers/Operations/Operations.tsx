import React from 'react';
import { useHttp } from '../../hooks/http.hook';
import FormOperation from '../../components/FormOperation';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Box } from '@material-ui/core';
import { getData, saveFormData } from '../../redux/action/operation.action';
import TableOperation from '../../components/TableOperation';
import { IPagination, IFormRequest } from '../../redux/types/operation.types';
import { IStore } from '../../redux/types/store.types';

export const Operations = () => {
  const { loading, request, error, clearError } = useHttp();
  const dispatch = useDispatch();
  const filter: IFormRequest = useSelector((state: IStore) => state.operation.formOperation);
  const { pageNum }: IPagination = useSelector((state: IStore) => state.operation.tableOperation);

  const requestData = async (pageNum = 0, filter: IFormRequest | null): Promise<void> => {
      const token = await sessionStorage.getItem('session_token');
      if (token) {
        const url = `/httpbridge-server/invoke/cpsadminservice/cardTransactionService/all`;
        const pageRequest = { filter: filter, pageNum: pageNum };
        let formData = new FormData();
        formData.append('csrfToken', token);
        formData.append('pageRequest', JSON.stringify(pageRequest));
        const dataTable = await request(url, 'POST', formData);
        dispatch(getData(dataTable));
      } else {
        console.error('no token');
      }
    };


  const changePageHandler = (pageNum: number) => {
    requestData(pageNum, filter);
  };

  const filterData = (formData: IFormRequest) => {
    dispatch(saveFormData(formData));
    requestData(pageNum, formData);
  }

  return (
    <Box p={1}>
      <Grid container>
        <Grid item xs={12}>
          <FormOperation getFilteredData={filterData} />
        </Grid>
        <Grid item xs={12}>
          <TableOperation
            getPaginationData={changePageHandler}
            useHttp={{ loading, request, error, clearError }}
          />
        </Grid>
        <Grid style={{ height: '200px' }} item xs={12}>
          <div className="Detail" />
        </Grid>
      </Grid>
    </Box>
  );
};
