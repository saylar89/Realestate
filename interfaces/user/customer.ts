import { IUser } from "./user";

export interface ICustomer extends IUser {
  budget: string;
  location: string;
}
