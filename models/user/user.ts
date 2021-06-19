import { IUser } from "../../interfaces/user/user";
import { v4 as uuidv4 } from "uuid";

class User implements IUser {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  phone: string;
  password: string;

  constructor(
    _firstName: string,
    _lastName: string,
    _age: string,
    _email: string,
    _phone: string,
    _password: string
  ) {
    this.id = uuidv4();
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.email = _email;
    this.phone = _phone;
    this.password = _password;
  }
}

export { User };
