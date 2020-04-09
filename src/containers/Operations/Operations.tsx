import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHttp } from '../../hooks/http.hook';
import { parse, format, getUnixTime } from 'date-fns';
import { Grid, Box } from '@material-ui/core';
import FormOperation from '../../components/FormOperation';
import TableOperation from '../../components/TableOperation';
import DetailOperation from '../../components/DetailOperation';
import { getData, saveFormData, getDetail } from '../../redux/action/operation.action';
import {
  IPagination,
  IFormState,
  IPaginationData,
  IDetailData,
} from '../../redux/types/operation.types';
import { IStore } from '../../redux/types/store.types';
import { StyledFixedGrid } from './styles';

export const Operations: React.FC = (): JSX.Element => {
  const { loading, request, error } = useHttp();
  const dispatch = useDispatch();
  const filter: IFormState = useSelector((state: IStore) => state.operation.formOperation);
  const dataTable: IPagination = useSelector((state: IStore) => state.operation.tableOperation);
  // TODO: tableDetails сюда кладется информация о строке на которую кликнули.
  const tableDetails: IDetailData = useSelector((state: IStore) => state.operation.tableDetails);

  const requestData = async (pageNum = 0, filter: IFormState | null): Promise<void> => {
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

  const generateStoreData = (data: IFormState) => {
    let storeData: IFormState = data;
    if (data.dateFrom) {
      const startTimestamp = getUnixTime(
        parse(
          format(data.dateFrom, 'dd.MM.yyyy') + ' ' + data.timeFrom,
          'dd.MM.yyyy HH:mm:ss',
          new Date()
        )
      );
      storeData = { ...storeData, startTimestamp };
    }
    if (data.dateEnd) {
      const endTimestamp = getUnixTime(
        parse(
          format(data.dateEnd, 'dd.MM.yyyy') + ' ' + data.timeEnd,
          'dd.MM.yyyy HH:mm:ss',
          new Date()
        )
      );
      storeData = { ...storeData, endTimestamp };
    }
    return storeData;
  };

  const filterData = (pageNum: number, data: IFormState = filter) => {
    const formData = generateStoreData(data);
    dispatch(saveFormData(formData));
    let { dateFrom, timeFrom, dateEnd, timeEnd, amount, ...otherData } = formData;
    if (amount) amount *= 100;
    const postData = { ...otherData, amount };
    requestData(pageNum, postData);
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
      <Grid container spacing={1}>
        <StyledFixedGrid item xs={12}>
          <FormOperation
            formValues={filter}
            saveFormData={(data) => dispatch(saveFormData(generateStoreData(data)))}
            getFilteredData={filterData}
          />
        </StyledFixedGrid>
        <Grid item xs={12}>
          <TableOperation
            getPaginationData={filterData}
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
