export interface IPaginationData {
  amount: number;
  authorizationCode: null | any;
  countryCode: string;
  currencyCode: number;
  expdate: number;
  fraudVerdict: null | any;
  hostResponseCode: null | any;
  internalResponseCode: number;
  issInst: number;
  localDateTime: string;
  mcc: number;
  merchantId: string;
  mti: number;
  opDate: number;
  pan: number;
  panEntryMode: number;
  posDataCode: string;
  rrn: string;
  stan: number;
  tableData: Object | any;
  terminalId: string;
  terminalType: number;
  transactionId: number;
  transactionType: number;
  txnDateTime: number;
}
export interface IPagination {
  data: IPaginationData[] | [];
}
