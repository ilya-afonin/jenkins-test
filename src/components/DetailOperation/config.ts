export const detailConfig: any = {
  card: [
    { title: 'Карта', field: 'pan' },
    { title: 'Срок действия', field: 'expdate' },
    { title: 'Флаг токена', field: 'tokenized' },
    { title: 'Номер токена', field: 'tokenNumber' },
  ],
  transaction: [
    [
      { title: 'Тип транзакции', field: 'transactionType' },
      { title: 'Тип операции', field: 'operationType' },
      { title: 'Категория транзакции', field: 'categoryCode' },
      { title: 'Статус транзакции', field: 'status' },
      { title: 'Сист. Дата и время', field: 'opDate' },
      { title: 'Тран. Дата и время', field: 'txnDateTime' },
      { title: 'Лок. Дата и время', field: 'localDateTime' },
    ],
    [
      { title: 'Сумма транзакции', field: 'amount' },
      { title: 'Валюта транзакции', field: 'currencyCode' },
      { title: 'Сумма транзакционной комиссии', field: 'feeAmount' },
      { title: 'Сумма в валюте карты', field: 'totalAmount' },
    ]
  ],
  merchant: [
    { title: 'Мерчант', field: 'merchantId' },
    { title: 'МСС', field: 'mcc' },
    { title: 'Адрес', field: 'merchantAddress' },
    { title: 'Город', field: 'merchantCity' },
    { title: 'Страна', field: 'country' },
    { title: 'Индекс', field: 'postalCode' },
    { title: 'ID терминала', field: 'terminalId' },
    { title: 'Тип терминала', field: 'terminalType' },
    { title: 'POSDATACODE', field: 'posDataCode' },
    { title: 'Метод чтения карты', field: 'panEntryMode' },
  ],
  checks: [
    { title: 'Код авторизации', field: 'authorizationCode' },
    { title: 'Внутренний код ответа', field: 'internalResponseCode' },
    { title: 'Код ответа в сеть', field: 'hostResponseCode' },
    { title: 'Код ответа Фрод-мониторинга', field: 'fraudVerdict' },
    { title: 'Номер правила Фрод-мониторинга', field: 'fraudRuleNumber' },
    { title: 'Имя правила Фрод-мониторинга', field: 'fraudRuleName' },
  ],
}