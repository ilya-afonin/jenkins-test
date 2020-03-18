//TODO: Решить по поводу асинхронной реализации.
/* const postCookie = () => async (dispatch, getState, useHttp) => {
  const url = "httpbridge-server/login";
  const username = "test_user";
  const password = "test_user";
  let formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  const [loading, request] = useHttp();
  return await request(url, "POST", formData);
};

const getToken = () => async (dispatch, getState, useHttp) => {
  const url = "httpbridge-server/csrfToken/get?moduleId=cpsadminservice";
  const [loading, request] = useHttp();
  const token = await request(url, "GET");
};

const getPaginationTable = () => async (dispatch, getState, useHttp) => {
  const url = `/httpbridge-server/invoke/cpsadminservice/cardTransactionService/all`;
  const [loading, request, error, clearError] = useHttp();
  const data = await request(url, "GET");
};

const postUserInfo = () => (dispatch, getState, useHttp) => {
  const { token } = getState();
  const url = "httpbridge-server/invoke/cpsadminservice/userService/userInfo";
  let formData = new FormData();
  formData.append("csrfToken", token);
  const data = useHttp(url, "POST", formData);
};
 */