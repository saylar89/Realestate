import { IProperty } from "../../interfaces/property/property";

class Property implements IProperty {
  id: string;
  country: string;
  city: string;
  state: string;
  location: string;
  price: number;
  sqm: number;

  constructor(
    _id: string,
    _country: string,
    _city: string,
    _state: string,
    _location: string,
    _price: number,
    _sqm: number
  ) {
    this.id = _id;
    this.country = _country;
    this.city = _city;
    this.state = _state;
    this.location = _location;
    this.price = _price;
    this.sqm = _sqm;
  }
}

export { Property };
