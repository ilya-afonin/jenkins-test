export interface IUser {
  depCodeEasup: string;
  depNameEasup: string;
  departmentName: string;
  email: string;
  lastName: string;
  lockStatus: boolean;
  login: string;
  middleName: string & {};
  name: string;
  orgCode: string;
  rang: string;
  tabNum: string;
  uuid: string;
}
export interface IUserInfo {
  roles: Array<object>;
  user: IUser;
}
