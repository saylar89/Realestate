import { User } from "./user";
import { IOwner } from "../../interfaces/user/owner";

class Customer extends User implements IOwner {
  price: string;
  bed: number;
  bath: number;
  sq: number;

  constructor(
    _firstName: string,
    _lastName: string,
    _age: number,
    _email: string,
    _phone: string,
    _password: string,
    _price: string,
    _bed: number,
    _bath: number,
    _sq: number
  ) {
    super(_firstName, _lastName, _age, _email, _phone, _password);
    this.price = _price;
    this.bed = _bed;
    this.bath = _bath;
    this.sq = _sq;
  }
}
