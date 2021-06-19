import { User } from "./user";
import { IOwner } from "../../interfaces/user/owner";

class Customer extends User implements IOwner {
  id: string;
  lastName: string;
  age: string;
  email: string;
  phone: string;
  price: string;
  bed: number;
  bath: number;
  sq: number;

  constructor(
    _id: string,
    _firstName: string,
    _lastName: string,
    _age: string,
    _email: string,
    _phone: string,
    _price: string,
    _bed: number,
    _bath: number,
    _sq: number
  ) {
    super(_id, _firstName, _lastName, _age, _email, _phone);
    this.price = _price;
    this.bed = _bed;
    this.bath = _bath;
    this.sq = _sq;
  }
}
