import { IUser } from "./user";

export interface IOwner extends IUser {
  price: string;
  bed: number;
  bath: number;
  sq: number;
}
