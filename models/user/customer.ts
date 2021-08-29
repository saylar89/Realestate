import { ICustomer } from "../../interfaces/user/customer";
import { User } from "./user";

class Customer extends User implements ICustomer {
  budget: string;
  location: string;

  constructor(
    _firstName: string,
    _lastName: string,
    _age: number,
    _email: string,
    _phone: string,
    _password: string,
    _budget: string,
    _location: string
  ) {
    super(_firstName, _lastName, _age, _email, _phone, _password);
    this.budget = _budget;
    this.location = _location;
  }
}
