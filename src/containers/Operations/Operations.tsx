import React from 'react';
import { useHttp } from '../../hooks/http.hook';
import FormOperation from '../../components/FormOperation';
import { Grid, Box } from '@material-ui/core';

export const Operations = () => {
  const { request } = useHttp();
  
  const requestData = async (formData: any): Promise<any> => {    
    try {
      let body = new FormData();
      // Object.keys(formData).forEach((key) => body.append(key, formData[key]));
      const token = sessionStorage.getItem('session_storage');
      if (token) body.append('csrfToken', token);
      body.append('pageRequest', JSON.stringify({ pageNum: 0 }));
      let data = await request(
        '/httpbridge-server/invoke/cpsadminservice/cardTransactionService/all ',
        'POST',
        body
      );
      //TODO: Запись данных в стор
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Box p={1}>
      <Grid container>
        <Grid item xs={12}>
          <FormOperation getFilteredData={requestData} />
        </Grid>
        <Grid item xs={12}>
          <div className="Table"></div>
        </Grid>
        <Grid item xs={12}>
          <div className="Detail"></div>
        </Grid>
      </Grid>
    </Box>
  );
};
