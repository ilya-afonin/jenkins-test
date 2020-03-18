export interface IPaginationData {
  transactionId: number;
  pan: number;
  expdate: number;
  transactionType: number;
  posDataCode: string;
  rrn: string;
  stan: number;
  mti: number;
  amount: number;
  currencyCode: number;
  opDate: number;
  txnDateTime: number;
  localDateTime: string;
  issInst: number;
  merchantId: string;
  mcc: number;
  countryCode: string;
  terminalId: number;
  terminalType: number;
  panEntryMode: number;
  authorizationCode: null;
  internalResponseCode: number;
  hostResponseCode: string | null;
  fraudVerdict: null;
}
export interface IPagination {
  data: IPaginationData | [];
}
