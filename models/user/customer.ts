import { ICustomer } from "../../interfaces/user/customer";
import { User } from "./user";

class Customer extends User implements ICustomer {
  id: string;
  lastName: string;
  age: number;
  email: string;
  phone: string;
  budget: string;
  location: string;

  constructor(
    _id: string,
    _firstName: string,
    _lastName: string,
    _age: number,
    _email: string,
    _phone: string,
    _budget: string,
    _location: string
  ) {
    super(_id, _firstName, _lastName, _age, _email, _phone);
    this.budget = _budget;
    this.location = _location;
  }
}
