// Данные таблицы
export interface IPaginationData {
  amount: number,
  authorizationCode: null | any,
  countryCode: string,
  currencyCode: number,
  expdate: number,
  fraudVerdict: null | any,
  hostResponseCode: null | any,
  internalResponseCode: number,
  issInst: number,
  localDateTime: string,
  mcc: number,
  merchantId: string,
  mti: number,
  opDate: number,
  pan: number,
  panEntryMode: number,
  posDataCode: string,
  rrn: string,
  stan: number,
  tableData: Object | any,
  terminalId: string,
  terminalType: number,
  transactionId: number,
  transactionType: number,
  txnDateTime: number,
}

// Данные формы
export interface IFormState {
  dateFrom: Date,
  timeFrom: string,
  dateEnd: Date,
  timeEnd: string,
  rrn?: number,
  pan?: number,
  amount?: number,
  merchantId?: string,
  authorizationCode?: string,
  startTimestamp?: number,
  endTimestamp?: number,
}

export interface IFormRequest {
  pan?: number,
  authorizationCode?: string,
  merchantId?: string,
  rrn?: number,
  amount?: number,
  startTimestamp?: number,
  endTimestamp?: number,
}

// Reducer page operation
export interface IOperationReducer {
  tableOperation: IPagination | {},
  formOperation: IFormState | {},
  tableDetails: ITransactionDetails | {},
}
export interface IPagination {
  data?: IPaginationData[] | [],
  pageNum?: number,
  size?: number,
  totalTxs?: number,
}

// Данные приходящие по запросу.
export interface ITransactionDetails {
  transactionId?: number,
  operationType?: number,
  categoryCode?: number,
  status?: number,
  feeType?: number,
  feeAmount?: number,
  totalAmount?: number,
  cardCurrency?: number,
  conversionRate?: number,
  conversionExp?: number,
  networkId?: number,
  posDataCode?: string | number,
  acquirerInstitute?: number,
  merchantAddress?: string,
  merchantCity?: string,
  country?: number | string,
  postalCode?: number | string,
  fraudRuleNumber?: number | string,
  fraudRuleName?: string,
  fraudComment?: string,
}

// Составные данные для детального отображениея.
export interface IDetailData {
  transactionId?: number,
  pan?: number,
  expdate?: number,
  tokenized?: boolean,
  tokenNumber?: number,
  transactionType?: number,
  operationType?: number,
  categoryCode?: number,
  status?: number,
  rrn?: string,
  stan?: number,
  amount?: number,
  currencyCode?: number,
  feeType?: number,
  feeAmount?: number,
  totalAmount?: number,
  cardCurrency?: number,
  conversionRate?: number,
  conversionExp?: number,
  opDate?: number,
  txnDateTime?: number,
  localDateTime?: number | string,
  mti?: number,
  networkId?: number,
  issInst?: number,
  acquirerInstitute?: number,
  merchantId?: string,
  mcc?: number,
  merchantAddress?: string,
  merchantCity?: string,
  country?: string,
  postalCode?: string,
  terminalId: string,
  terminalType: number,
  posDataCode: string,
  panEntryMode: number,
  authorizationCode: null | any,
  internalResponseCode: number,
  hostResponseCode: null | any,
  fraudVerdict: null | any,
  fraudRuleNumber?: string,
  fraudRuleName?: string,
  fraudComment?: string,
}
