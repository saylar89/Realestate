import { ILand } from "../../interfaces/property/land";
import { Property } from "./property";

class Land extends Property implements ILand {
  size: string;
  type: string;
  direction: string;

  constructor(
    _id: string,
    _country: string,
    _city: string,
    _state: string,
    _location: string,
    _price: number,
    _sqm: number,
    _size: string,
    _type: string,
    _direction: string
  ) {
    super(_id, _country, _city, _state, _location, _price, _sqm);
    this.size = _size;
    this.type = _type;
    this.direction = _direction;
  }
}
