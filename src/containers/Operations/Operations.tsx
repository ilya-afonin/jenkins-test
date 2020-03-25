import React from 'react';
import { useHttp } from '../../hooks/http.hook';
import FormOperation from '../../components/FormOperation';
import { useDispatch } from 'react-redux';
import { Grid, Box } from '@material-ui/core';
import { getPaginationDataAction } from '../../redux/action/operation.action';
import TableOperation from '../../components/TableOperation';

export const Operations = () => {
  const { loading, request, error, clearError } = useHttp();
  const dispatch = useDispatch();

  const requestData = async (pageNum: number, body = null) => {
    const token = await sessionStorage.getItem('session_token');
    if (token) {
      const url = `/httpbridge-server/invoke/cpsadminservice/cardTransactionService/all`;
      const pageNumber = { pageNum: pageNum };
      let formData = new FormData();
      formData.append('csrfToken', token);
      formData.append('pageRequest', JSON.stringify(pageNumber));
      formData.append('filter', JSON.stringify(null));
      const dataTable = await request(url, 'POST', formData);
      dispatch(getPaginationDataAction(dataTable));
    } else {
      console.error('no token');
    }
  };
// Метод возвращает номер текущей страницы и делает запрос на сервер.
  const handleChangePage = (page: number) => {
    requestData(page);
  };

  return (
    <Box p={1}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <FormOperation getFilteredData={requestData} />
        </Grid>
        <Grid item xs={12}>
          <TableOperation
            getPaginationData={handleChangePage}
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
